all: index.html

index.html: index.bs
	bikeshed --allow-execute spec index.bs

online:
	curl https://api.csswg.org/bikeshed/ -F file=@index.bs -F output=err
	curl https://api.csswg.org/bikeshed/ -F file=@index.bs -F force=1 > index.html
