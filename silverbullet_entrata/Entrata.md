#dan #puneet #noah #bryson


# [Tasks](Tasks)

```query
task
where !done and tags = blank
render [[!silverbullet.md/Library/Core/Query/Task]]
```

# [Projects](Projects)
```query
project render [[template/render/project]]
```




```query
page 
where tags not in ["template", "system", "project"]
where size > 0 and name != 'Entrata'
where hooks = blank
order by lastModified desc
```




# Quick Notes

```query
page where name =~ /^Inbox\// 
order by created desc
render [[Library/Core/Query/Page]]
```


# Recent Pages
```query
page order by lastModified desc limit 10
where name != "Entrata"
render [[Library/Core/Query/Page]]
```

