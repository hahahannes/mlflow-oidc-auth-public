include .env
export 

install:
	pip install -e .
	
run:
	mlflow server --app-name oidc-auth
