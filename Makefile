build:
	docker build . -t timer-bot:latest
run:
	docker run --rm --restart unless-stopped timer-bot:latest