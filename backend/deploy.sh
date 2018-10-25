TAG=$1
echo "Deploy image tag as $TAG"
docker build -t budgiex-services:$TAG .
docker tag budgiex-services:$TAG 451515956712.dkr.ecr.ap-southeast-2.amazonaws.com/budgiex-services:$TAG
docker push 451515956712.dkr.ecr.ap-southeast-2.amazonaws.com/budgiex-services:$TAG
# kubectl apply -f jupiter.yaml  -n training