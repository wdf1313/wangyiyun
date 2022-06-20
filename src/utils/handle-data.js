export function handleSongsCategory(data){
    //将分类名对象获取出来
    const category=data.categories;
    //将每个键值对数组进行数据加工，将每个键值对数组的value改为数组
    const categoryData=Object.entries(category).map(([key,value])=>{
        return {
          name:value,
          subs:[]
        }
    })
    // [[语种,sub:[]],[风格,sub:[]]]
    //将数据加入到对应类名中
    for(const item of data.sub){
        categoryData[item.category].subs.push(item)
    }
return categoryData;
}