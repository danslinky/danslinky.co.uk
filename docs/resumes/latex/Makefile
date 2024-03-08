.PHONY: all

all: build

build: #get
	pandoc --from=markdown+raw_tex \
	--output=resume.tex \
	../markdown/index.md \
	--lua-filter=fontawesome.lua \
	--include-in-header=header.tex \
	--epub-metadata=metadata.yaml \
    --metadata author="Daniel Slinky" \
    --metadata title="Resume" \
    --metadata subject="Platform Engineer | SRE | DevSecOps" \
    --metadata keywords="Platform,Engineer,SRE,DevOps,SecOps,sysadmin,Linux,Cloud,Kubernetes,AWS,Terraform,Git,GitHub" \
	--template template.latex \
	-V linkcolor=blue -V colorlinks=true -V urlcolor=blue
	pdflatex resume.tex

	pandoc -f markdown+raw_tex \
	-t docx \
	-o resume.docx \
	../markdown/index.md \
	--lua-filter=fontawesome.lua \
	--include-in-header=header.tex \
	--metadata-file=metadata.yaml \
    --metadata author="Daniel Slinky" \
    --metadata title="Resume" \
    --metadata subject="Platform Engineer | SRE | DevSecOps" \
    --metadata keywords="Platform,Engineer,SRE,DevOps,SecOps,sysadmin,Linux,Cloud,Kubernetes,AWS,Terraform,Git,GitHub" \
	--template template.latex \
	-V linkcolor=blue -V colorlinks=true -V urlcolor=blue

# get:
# 	curl -sSL -o resume.md https://raw.githubusercontent.com/danslinky/danslinky.co.uk/main/docs/resumes/markdown/index.md