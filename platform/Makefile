NAME:=aeirth_platform
VERSION:=latest
TAG:=$(NAME):$(VERSION)

PWD:=$(shell pwd)
UID:=$(shell id -u)
GID:=$(shell id -g)
SRC:=$(PWD)

terraform:
	@mkdir -pv $(HOME)/.aws
	@docker run -it -v $(SRC):/usr/app/src:rw --workdir /usr/app/src -v $(HOME)/.aws:/.aws:rw --user $(UID):$(GID) $(TAG)

docker:
	@docker build --tag $(TAG) .

