NAME:=aeirth_terraform
VERSION:=latest
TAG:=$(NAME):$(VERSION)

PWD:=$(shell pwd)
UID:=$(shell id -u)
GID:=$(shell id -g)
DIST:=$(PWD)/dist
SRC:=$(PWD)

terraform:
	@docker run -it -v $(SRC):/usr/app/src:rw --workdir /usr/app/src --user $(UID):$(GID) $(TAG)

docker:
	@docker build --tag $(TAG) .

