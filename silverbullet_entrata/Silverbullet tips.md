```task render template
* [{{state}}] [[{{ref}}]] {{name}}

```



```
query
page where name =~ /^Projects\// where tags != project 
render [[Library/Core/Query/Page]]
```

