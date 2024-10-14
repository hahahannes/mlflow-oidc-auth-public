include .env
export 

run:
	mlflow server --app-name oidc-auth
