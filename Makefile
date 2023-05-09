NAME:=aeirthedit
VERSION:=latest
TAG:=$(NAME):$(VERSION)

PWD:=$(shell pwd)
DIST:=$(PWD)/dist
SRC:=$(PWD)/src

build:
	@mkdir -pv $(SRC)
	@mkdir -pv $(DIST)
	@docker run -v $(SRC):/usr/app/src:ro -v $(DIST):/usr/app/dist $(TAG)

dev:
	@mkdir -pv $(SRC)
	@mkdir -pv $(DIST)
	@docker run -v $(SRC):/usr/app/src:ro -v $(DIST):/usr/app/dist -p 8080:8080 $(TAG) dev

docker:
	@docker build --tag $(TAG) .

clean:
	@rm -rfv $(DIST)

