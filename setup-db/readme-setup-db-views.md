
# Setup the views in the database

## Use js file to create or update all views

terminal:
in wordsworm\setup-db
>node setup-db-views.js

The views will be initially installed or updated.

## Use separate file containing a view

This call creates. It can't update.

terminal:
curl -X PUT http://admin:asy@localhost:5984/wordsworm/_design/teams -H "Content-Type: application/json" --data-binary @view-select-best-team-scores.json
