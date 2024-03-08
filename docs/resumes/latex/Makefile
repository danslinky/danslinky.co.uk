.PHONY: all

.PHONY: all

AUTHOR = "Dan Slinky"
TITLE = "Resume"
SUBJECT = "Platform Engineer | SRE | DevSecOps | MLOps | FinOps | sysadmin | Linux | Cloud | Kubernetes | AWS | Terraform | Git | GitHub | Python | Bash | Docker | Jenkins | CI/CD | Automation | Monitoring | Security | Compliance | Governance | Risk | IAM | Networking | Storage | Databases | Serverless | Microservices | Containers | Infrastructure as Code | Configuration Management | Orchestration | Observability | Site Reliability Engineering | IO Abuse"
KEYWORDS = "Platform,Engineer,SRE,DevOps,SecOps,sysadmin,Linux,Cloud,Kubernetes,AWS,Terraform,Git,GitHub,Python,Bash,Docker,Jenkins,CI/CD,Automation,Monitoring,Security,Compliance,Governance,Risk,IAM,Networking,Storage,Databases,Serverless,Microservices,Containers,Infrastructure as Code,Configuration Management,Orchestration,Observability,Site Reliability Engineering,IO Abuse"

all: build

build: #get
	## Generate a PDF
	pandoc --from=markdown+raw_tex \
	--output=resume.tex \
	../markdown/index.md \
	--lua-filter=fontawesome.lua \
	--include-in-header=header.tex \
	--epub-metadata=metadata.yaml \
	--metadata author=$(AUTHOR) \
	--metadata title="$(AUTHOR) PDF $(TITLE)" \
	--metadata subject=$(SUBJECT) \
	--metadata keywords=$(KEYWORDS) \
	--template template.latex \
	-V linkcolor=blue -V colorlinks=true -V urlcolor=blue
	pdflatex resume.tex
	# Generate a DOCX
	pandoc -f markdown+raw_tex \
	-t docx \
	-o resume.docx \
	../markdown/index.md \
	--lua-filter=fontawesome.lua \
	--include-in-header=header.tex \
	--metadata-file=metadata.yaml \
	--metadata author=$(AUTHOR) \
	--metadata title="$(AUTHOR) Word $(TITLE)" \
	--metadata subject=$(SUBJECT) \
	--metadata keywords=$(KEYWORDS)

# get:
# 	curl -sSL -o resume.md https://raw.githubusercontent.com/danslinky/danslinky.co.uk/main/docs/resumes/markdown/index.md