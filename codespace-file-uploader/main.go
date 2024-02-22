package main

import (
	"io"
	"net/http"
	"os"
)

func main() {
	uploadMux := http.NewServeMux()
	uploadHandler := func(w http.ResponseWriter, r *http.Request) {
		if r.Method == "GET" {
			http.ServeFile(w, r, "upload.html")
			return
		}
		if r.Method == "POST" {
			file, handler, err := r.FormFile("file")
			if err != nil {
				http.Error(w, err.Error(), http.StatusInternalServerError)
				return
			}
			defer file.Close()

			dst, err := os.OpenFile(handler.Filename, os.O_WRONLY|os.O_CREATE, 0666)
			if err != nil {
				http.Error(w, err.Error(), http.StatusInternalServerError)
				return
			}
			defer dst.Close()

			if _, err := io.Copy(dst, file); err != nil {
				http.Error(w, err.Error(), http.StatusInternalServerError)
				return
			}

			w.Write([]byte("File successfully stolen!"))
			return
		}
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
	}

	uploadMux.HandleFunc("/upload", uploadHandler)
	http.ListenAndServe(":8080", uploadMux)
}
