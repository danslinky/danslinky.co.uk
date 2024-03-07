.PHONY: all

all: build

build: #get
	pandoc --from=markdown --output=resume.tex ../markdown/index.md --lua-filter=fontawesome.lua --include-in-header=header.tex
	pdflatex resume.tex

# get:
# 	curl -sSL -o resume.md https://raw.githubusercontent.com/danslinky/danslinky.co.uk/main/docs/resumes/markdown/index.md
