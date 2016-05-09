background: url("%=static=%assets/moduleName/sample-image-name.png") no-repeat
img(src="%=static=%img/assets/moduleName/sample-image-name.png" alt="")
!= jadeHelpers.Icon.call(locals, {iconName: '%iconName%', className: '%customClass%'})
