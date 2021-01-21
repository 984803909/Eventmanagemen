   
	let  appid="wx6c406745945ce5c0" 
    let systemid="330100"
	let userid="0"
	
	function Post(url,data) {
		
        data.appid=appid
		data.systemid=systemid
		data.userid=userid
        return new Promise((resolve, reject) => {
        uni.request({
        url: url,
        data:data,
        method: 'POST',
        header: {
            'content-type': 'application/json' // 默认值
          },
        success: function(res) {//正确的时候
		
        resolve(res)//Promise返回成功
        },
        fail: function(res) {//错误的时候
	
        reject(res);//Promise返回失败
        }
        })
        })
		
        }
		
		module.exports={Post}