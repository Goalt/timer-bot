build:
	docker build . -t timer-bot:latest
run:
	docker run --rm timer-bot:latest