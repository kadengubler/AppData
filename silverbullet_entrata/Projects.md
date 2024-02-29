
# RTB
```query
project where status != 'Done' or 'Complete' or 'Archive'
where tags = 'rtb'
render [[template/render/project]]
```

# ITB
```query
project where status != 'Done' or 'Complete' or 'Archive'
where tags = 'itb'
render [[template/render/project]]
```

# Not Tagged
```query
project where status != 'Done' or 'Complete' or 'Archive'
where tags != 'rtb' and tags != 'itb'
render [[template/render/project]]
```


