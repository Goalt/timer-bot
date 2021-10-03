build:
	docker build . -t timer-bot:latest
run:
	docker run -d --restart unless-stopped timer-bot:latest