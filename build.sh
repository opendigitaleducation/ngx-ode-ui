buildSass () {
  docker-compose run --rm -u "$USER_UID:$GROUP_GID" node sh -c "npm rebuild node-sass --force"
}

install () {
  docker-compose run --rm -u "$USER_UID:$GROUP_GID" node sh -c "npm install"
}

publish () {
  LOCAL_BRANCH=`echo $GIT_BRANCH | sed -e "s|origin/||g"`
  docker-compose run --rm -u "$USER_UID:$GROUP_GID" node sh -c "cd dist && npm publish --tag $LOCAL_BRANCH"
}


for param in "$@"
do
  case $param in
    buildSass)
      buildSass
      ;;
    build)
      install
      docker-compose run --rm -u "$USER_UID:$GROUP_GID" node sh -c "npm run build"
      ;;
    test)
      install
      docker-compose run --rm -u "$USER_UID:$GROUP_GID" node sh -c "npm run test"
      ;;
    publish)
      publish
      ;;
    *)
      echo "Invalid argument : $param"
  esac
  if [ ! $? -eq 0 ]; then
    exit 1
  fi
done