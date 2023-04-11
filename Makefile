NAME:=aeirthedit
VERSION:=latest
PORT:=8080

docker:
	@docker build --tag $(NAME):$(VERSION) .

run: docker
	@docker run -d -p $(PORT):80 --name $(NAME) $(NAME):$(VERSION)

kill:
	@docker kill $(NAME)
