.PHONY: all

all: build

build: #get
	pandoc --from=markdown+raw_tex \
	--output=resume.tex \
	../markdown/index.md \
	--lua-filter=fontawesome.lua \
	--include-in-header=header.tex \
	--metadata-file=metadata.yaml
	pdflatex resume.tex

# get:
# 	curl -sSL -o resume.md https://raw.githubusercontent.com/danslinky/danslinky.co.uk/main/docs/resumes/markdown/index.md