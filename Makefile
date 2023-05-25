NAME:=aeirth_frontend
VERSION:=latest
TAG:=$(NAME):$(VERSION)

PWD:=$(shell pwd)
SRC:=$(PWD)/src

dev:
	@mkdir -pv $(SRC)
	@docker run -v $(SRC):/usr/app/src:ro -p 8080:8080 $(TAG) dev

docker:
	@docker build --tag $(TAG) .

clean:
	@rm -rfv $(DIST)

