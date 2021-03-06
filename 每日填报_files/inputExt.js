//根据ip获得地址
//百度
$.ajax({
	url:'http://api.map.baidu.com/location/ip',
	data:{
		ak:'NqBAoQkTbjD1HWIhl3iosRIXhfAQDdV7'
	},
	type:'get',
	dataType:'jsonp',
	success:function(data){
		if(data.hasOwnProperty("status") && data.status=='0')
			$("#bdipszd").val(data.content.address_detail.province+','+data.content.address_detail.city);
	}
});
//高德
$.ajax({	
	url:'https://restapi.amap.com/v3/ip',
	data:{
		key:'94e69ae4c80bbbc192c7a40d8684ee45'
	},
	type:'get',
	dataType:'json',
	success:function(data){
		if(data.hasOwnProperty("status") && data.status=='1')
			$("#gdipszd").val(data.province+','+data.city);
	}
});

// 失去焦点时检测
weui.form.checkIfBlur('#form');
// 表单提交
document.querySelector('#formSubmitBtn').addEventListener('click', function () {
    weui.form.validate('#form', function (error) {
        console.log(error);
        if (!error) {
			//通过腾讯获得ip所在地
			if($("#bdipszd").val()!=$("#cascadePickerBtn").val() && $("#gdipszd").val()!=$("#cascadePickerBtn").val()){
				$.ajax({
					url:'https://apis.map.qq.com/ws/location/v1/ip',
					data:{
						key:'QPIBZ-5DPWW-FULR4-R7UZC-4663F-EMF35',
						output:'jsonp'
					},
					type:'get',
					dataType:'jsonp',
					success:function(data){
						if(data.hasOwnProperty("status") && data.status=='0')
							$("#txipszd").val(data.result.ip+','+data.result.ad_info.nation+','+data.result.ad_info.province+','+data.result.ad_info.city);
					}
				});
			}
            var loading = weui.loading('填报中...');
            setTimeout(function () {
                loading.hide();
				weui.confirm('<span style="font-size:10px"><div>您的当日填报选择如下：</div><div>[1]当前所在地：<b>'+document.getElementById('cascadePickerBtn').value+'</b></div><div>[2]上次填报以来有无城市间流动经历：<b>'+getRadioValue('csld')+'</b></div><div>[3]当日有无国内中、高风险区进出及境外返回人员接触史：<b>'+getRadioValue('hbjc')+'</b></div><div>[4]当日身体症状：<b>'+getRadioValue('fyzz')+'</b></div><div>[5]当前是否隔离观察：<b>'+getRadioValue('glzt')+'</b><br/>[6]是否在校在岗：<b>'+getRadioValue('zxzg')+'</b></div><div>请确认是否正确?</div></span>', function () {
				document.querySelector('#sub_form').action="inputExt_do.asp";
				document.querySelector('#sub_form').method="post";
				document.querySelector('#sub_form').submit();
				}, function () {
					
				});
            }, 1500);		
        }
    });
});
//document.querySelector('#closebtn').addEventListener('click', function () {
	//window.location.href="login.asp";
//});
//拦截安卓回退按钮
//history.pushState(null, null, location.href);
//window.addEventListener('popstate', function(event) {
    //history.pushState(null, null, location.href );
    //此处加入回退时你要执行的代码
//});

function getRadioValue(name){
	var radio = document.getElementsByName(name);
	for (i=0; i<radio.length; i++) {
		if (radio[i].checked) {
			return radio[i].value;
		}
	}
}

function outApply(){
	location.href='qingjialist.asp';
}


document.querySelector('#cascadePickerBtn').addEventListener('click', function () {
		var defaultP='',defaultC='',dpc='';
		dpc = document.getElementById('cascadePickerBtn').value
		if(dpc!=''){
			defaultP = dpc.split(',')[0];
			defaultC = dpc.split(',')[1];
		}
	    weui.picker([{
	
			"label": "河南省",
			
			"value": "province",
			"children": [{
				
				
				"label": "洛阳市",
				
				"value": "city",
				
			}, {
				
				
				"label": "三门峡市",
				
				"value": "city",
				
			}, {
				
				
				"label": "漯河市",
				
				"value": "city",
				
			}, {
				
				
				"label": "许昌市",
				
				"value": "city",
				
			}, {
				
				
				"label": "南阳市",
				
				"value": "city",
				
			}, {
				
				
				"label": "信阳市",
				
				"value": "city",
				
			}, {
				
				
				"label": "济源市",
				
				"value": "city",
				
			}, {
				
				
				"label": "驻马店市",
				
				"value": "city",
				
			}, {
				
				
				"label": "濮阳市",
				
				"value": "city",
				
			}, {
				
				
				"label": "焦作市",
				
				"value": "city",
				
			}, {
				
				
				"label": "鹤壁市",
				
				"value": "city",
				
			}, {
				
				
				"label": "新乡市",
				
				"value": "city",
				
			}, {
				
				
				"label": "平顶山市",
				
				"value": "city",
				
			}, {
				
				
				"label": "周口市",
				
				"value": "city",
				
			}, {
				
				
				"label": "安阳市",
				
				"value": "city",
				
			}, {
				
				
				"label": "郑州市",
				
				"value": "city",
				
			}, {
				
				
				"label": "开封市",
				
				"value": "city",
				
			}, {
				
				
				"label": "商丘市",
				
				"value": "city",
				
			}]
		}, {
			"citycode": [],
			
			"label": "广东省",
			
			"value": "province",
			"children": [{
				
				
				"label": "汕头市",
				
				"value": "city",
				
			}, {
				
				
				"label": "肇庆市",
				
				"value": "city",
				
			}, {
				
				
				"label": "佛山市",
				
				"value": "city",
				
			}, {
				
				
				"label": "惠州市",
				
				"value": "city",
				
			}, {
				
				
				"label": "深圳市",
				
				"value": "city",
				
			}, {
				
				
				"label": "珠海市",
				
				"value": "city",
				
			}, {
				
				
				"label": "湛江市",
				
				"value": "city",
				
			}, {
				
				
				"label": "江门市",
				
				"value": "city",
				
			}, {
				
				
				"label": "阳江市",
				
				"value": "city",
				
			}, {
				
				
				"label": "茂名市",
				
				"value": "city",
				
			}, {
				
				
				"label": "东沙群岛",
				
				"value": "city",
				
			}, {
				
				
				"label": "潮州市",
				
				"value": "city",
				
			}, {
				
				
				"label": "汕尾市",
				
				"value": "city",
				
			}, {
				
				
				"label": "云浮市",
				
				"value": "city",
				
			}, {
				
				
				"label": "河源市",
				
				"value": "city",
				
			}, {
				
				
				"label": "梅州市",
				
				"value": "city",
				
			}, {
				
				
				"label": "东莞市",
				
				"value": "city",
				
			}, {
				
				
				"label": "揭阳市",
				
				"value": "city",
				
			}, {
				
				
				"label": "广州市",
				
				"value": "city",
				
			}, {
				
				
				"label": "韶关市",
				
				"value": "city",
				
			}, {
				
				
				"label": "清远市",
				
				"value": "city",
				
			}, {
				
				
				"label": "中山市",
				
				"value": "city",
				
			}]
		}, {
			"citycode": [],
			
			"label": "内蒙古自治区",
			
			"value": "province",
			"children": [{
				
				
				"label": "乌海市",
				
				"value": "city",
				
			}, {
				
				
				"label": "巴彦淖尔市",
				
				"value": "city",
				
			}, {
				
				
				"label": "包头市",
				
				"value": "city",
				
			}, {
				
				
				"label": "呼伦贝尔市",
				
				"value": "city",
				
			}, {
				
				
				"label": "鄂尔多斯市",
				
				"value": "city",
				
			}, {
				
				
				"label": "阿拉善盟",
				
				"value": "city",
				
			}, {
				
				
				"label": "通辽市",
				
				"value": "city",
				
			}, {
				
				
				"label": "兴安盟",
				
				"value": "city",
				
			}, {
				
				
				"label": "锡林郭勒盟",
				
				"value": "city",
				
			}, {
				
				
				"label": "呼和浩特市",
				
				"value": "city",
				
			}, {
				
				
				"label": "赤峰市",
				
				"value": "city",
				
			}, {
				
				
				"label": "乌兰察布市",
				
				"value": "city",
				
			}]
		}, {
			"citycode": [],
			
			"label": "黑龙江省",
			
			"value": "province",
			"children": [{
				
				
				"label": "大兴安岭地区",
				
				"value": "city",
				
			}, {
				
				
				"label": "七台河市",
				
				"value": "city",
				
			}, {
				
				
				"label": "鹤岗市",
				
				"value": "city",
				
			}, {
				
				
				"label": "伊春市",
				
				"value": "city",
				
			}, {
				
				
				"label": "绥化市",
				
				"value": "city",
				
			}, {
				
				
				"label": "哈尔滨市",
				
				"value": "city",
				
			}, {
				
				
				"label": "黑河市",
				
				"value": "city",
				
			}, {
				
				
				"label": "齐齐哈尔市",
				
				"value": "city",
				
			}, {
				
				
				"label": "牡丹江市",
				
				"value": "city",
				
			}, {
				
				
				"label": "鸡西市",
				
				"value": "city",
				
			}, {
				
				
				"label": "大庆市",
				
				"value": "city",
				
			}, {
				
				
				"label": "双鸭山市",
				
				"value": "city",
				
			}, {
				
				
				"label": "佳木斯市",
				
				"value": "city",
				
			}]
		}, {
			"citycode": [],
			
			"label": "新疆维吾尔自治区",
			
			"value": "province",
			"children": [{
				
				
				"label": "北屯市",
				
				"value": "city",
				
			}, {
				
				
				"label": "铁门关市",
				
				"value": "city",
				
			}, {
				
				
				"label": "博尔塔拉蒙古自治州",
				
				"value": "city",
				
			}, {
				
				
				"label": "双河市",
				
				"value": "city",
				
			}, {
				
				
				"label": "塔城地区",
				
				"value": "city",
				
			}, {
				
				
				"label": "可克达拉市",
				
				"value": "city",
				
			}, {
				
				
				"label": "和田地区",
				
				"value": "city",
				
			}, {
				
				
				"label": "昆玉市",
				
				"value": "city",
				
			}, {
				
				
				"label": "阿勒泰地区",
				
				"value": "city",
				
			}, {
				
				
				"label": "克拉玛依市",
				
				"value": "city",
				
			}, {
				
				
				"label": "石河子市",
				
				"value": "city",
				
			}, {
				
				
				"label": "昌吉回族自治州",
				
				"value": "city",
				
			}, {
				
				
				"label": "五家渠市",
				
				"value": "city",
				
			}, {
				
				
				"label": "巴音郭楞蒙古自治州",
				
				"value": "city",
				
			}, {
				
				
				"label": "乌鲁木齐市",
				
				"value": "city",
				
			}, {
				
				
				"label": "伊犁哈萨克自治州",
				
				"value": "city",
				
			}, {
				
				
				"label": "阿克苏地区",
				
				"value": "city",
				
			}, {
				
				
				"label": "阿拉尔市",
				
				"value": "city",
				
			}, {
				
				
				"label": "喀什地区",
				
				"value": "city",
				
			}, {
				
				
				"label": "图木舒克市",
				
				"value": "city",
				
			}, {
				
				
				"label": "克孜勒苏柯尔克孜自治州",
				
				"value": "city",
				
			}, {
				
				
				"label": "哈密市",
				
				"value": "city",
				
			}, {
				
				
				"label": "吐鲁番市",
				
				"value": "city",
				
			}]
		}, {
			"citycode": [],
			
			"label": "湖北省",
			
			"value": "province",
			"children": [{
				
				
				"label": "十堰市",
				
				"value": "city",
				
			}, {
				
				
				"label": "襄阳市",
				
				"value": "city",
				
			}, {
				
				
				"label": "荆门市",
				
				"value": "city",
				
			}, {
				
				
				"label": "宜昌市",
				
				"value": "city",
				
			}, {
				
				
				"label": "武汉市",
				
				"value": "city",
				
			}, {
				
				
				"label": "黄冈市",
				
				"value": "city",
				
			}, {
				
				
				"label": "天门市",
				
				"value": "city",
				
			}, {
				
				
				"label": "孝感市",
				
				"value": "city",
				
			}, {
				
				
				"label": "潜江市",
				
				"value": "city",
				
			}, {
				
				
				"label": "仙桃市",
				
				"value": "city",
				
			}, {
				
				
				"label": "恩施土家族苗族自治州",
				
				"value": "city",
				
			}, {
				
				
				"label": "荆州市",
				
				"value": "city",
				
			}, {
				
				
				"label": "咸宁市",
				
				"value": "city",
				
			}, {
				
				
				"label": "神农架林区",
				
				"value": "city",
				
			}, {
				
				
				"label": "随州市",
				
				"value": "city",
				
			}, {
				
				
				"label": "鄂州市",
				
				"value": "city",
				
			}, {
				
				
				"label": "黄石市",
				
				"value": "city",
				
			}]
		}, {
			"citycode": [],
			
			"label": "辽宁省",
			
			"value": "辽宁省",
			"children": [{
				
				
				"label": "葫芦岛市",
				
				"value": "city",
				
			}, {
				
				
				"label": "大连市",
				
				"value": "city",
				
			}, {
				
				
				"label": "丹东市",
				
				"value": "city",
				
			}, {
				
				
				"label": "锦州市",
				
				"value": "city",
				
			}, {
				
				
				"label": "抚顺市",
				
				"value": "city",
				
			}, {
				
				
				"label": "沈阳市",
				
				"value": "沈阳市",
				
			}, {
				
				
				"label": "铁岭市",
				
				"value": "city",
				
			}, {
				
				
				"label": "营口市",
				
				"value": "city",
				
			}, {
				
				
				"label": "阜新市",
				
				"value": "city",
				
			}, {
				
				
				"label": "盘锦市",
				
				"value": "city",
				
			}, {
				
				
				"label": "本溪市",
				
				"value": "city",
				
			}, {
				
				
				"label": "辽阳市",
				
				"value": "city",
				
			}, {
				
				
				"label": "鞍山市",
				
				"value": "city",
				
			}, {
				
				
				"label": "朝阳市",
				
				"value": "city",
				
			}]
		}, {
			"citycode": [],
			
			"label": "山东省",
			
			"value": "province",
			"children": [{
				
				
				"label": "烟台市",
				
				"value": "city",
				
			}, {
				
				
				"label": "威海市",
				
				"value": "city",
				
			}, {
				
				
				"label": "青岛市",
				
				"value": "city",
				
			}, {
				
				
				"label": "淄博市",
				
				"value": "city",
				
			}, {
				
				
				"label": "聊城市",
				
				"value": "city",
				
			}, {
				
				
				"label": "临沂市",
				
				"value": "city",
				
			}, {
				
				
				"label": "潍坊市",
				
				"value": "city",
				
			}, {
				
				
				"label": "东营市",
				
				"value": "city",
				
			}, {
				
				
				"label": "滨州市",
				
				"value": "city",
				
			}, {
				
				
				"label": "日照市",
				
				"value": "city",
				
			}, {
				
				
				"label": "泰安市",
				
				"value": "city",
				
			}, {
				
				
				"label": "菏泽市",
				
				"value": "city",
				
			}, {
				
				
				"label": "济宁市",
				
				"value": "city",
				
			}, {
				
				
				"label": "济南市",
				
				"value": "city",
				
			}, {
				
				
				"label": "枣庄市",
				
				"value": "city",
				
			}, {
				
				
				"label": "德州市",
				
				"value": "city",
				
			}]
		}, {
			"citycode": [],
			
			"label": "江苏省",
			
			"value": "province",
			"children": [{
				
				
				"label": "连云港市",
				
				"value": "city",
				
			}, {
				
				
				"label": "宿迁市",
				
				"value": "city",
				
			}, {
				
				
				"label": "南京市",
				
				"value": "city",
				
			}, {
				
				
				"label": "南通市",
				
				"value": "city",
				
			}, {
				
				
				"label": "淮安市",
				
				"value": "city",
				
			}, {
				
				
				"label": "无锡市",
				
				"value": "city",
				
			}, {
				
				
				"label": "苏州市",
				
				"value": "city",
				
			}, {
				
				
				"label": "常州市",
				
				"value": "city",
				
			}, {
				
				
				"label": "徐州市",
				
				"value": "city",
				
			}, {
				
				
				"label": "泰州市",
				
				"value": "city",
				
			}, {
				
				
				"label": "扬州市",
				
				"value": "city",
				
			}, {
				
				
				"label": "盐城市",
				
				"value": "city",
				
			}, {
				
				
				"label": "镇江市",
				
				"value": "city",
				
			}]
		}, {
			"citycode": [],
			
			"label": "陕西省",
			
			"value": "province",
			"children": [{
				
				
				"label": "商洛市",
				
				"value": "city",
				
			}, {
				
				
				"label": "西安市",
				
				"value": "city",
				
			}, {
				
				
				"label": "汉中市",
				
				"value": "city",
				
			}, {
				
				
				"label": "铜川市",
				
				"value": "city",
				
			}, {
				
				
				"label": "安康市",
				
				"value": "city",
				
			}, {
				
				
				"label": "榆林市",
				
				"value": "city",
				
			}, {
				
				
				"label": "咸阳市",
				
				"value": "city",
				
			}, {
				
				
				"label": "延安市",
				
				"value": "city",
				
			}, {
				
				
				"label": "渭南市",
				
				"value": "city",
				
			}, {
				
				
				"label": "宝鸡市",
				
				"value": "city",
				
			}]
		}, {
			
			
			"label": "上海市",
			
			"value": "province",
			"children": [{
				
				
				"label": "上海市",
				
				"value": "city",
				
			}]
		}, {
			"citycode": [],
			
			"label": "贵州省",
			
			"value": "province",
			"children": [{
				
				
				"label": "遵义市",
				
				"value": "city",
				
			}, {
				
				
				"label": "铜仁市",
				
				"value": "city",
				
			}, {
				
				
				"label": "黔南布依族苗族自治州",
				
				"value": "city",
				
			}, {
				
				
				"label": "六盘水市",
				
				"value": "city",
				
			}, {
				
				
				"label": "黔东南苗族侗族自治州",
				
				"value": "city",
				
			}, {
				
				
				"label": "安顺市",
				
				"value": "city",
				
			}, {
				
				
				"label": "黔西南布依族苗族自治州",
				
				"value": "city",
				
			}, {
				
				
				"label": "毕节市",
				
				"value": "city",
				
			}, {
				
				
				"label": "贵阳市",
				
				"value": "city",
				
			}]
		}, {
			
			
			"label": "重庆市",
			
			"value": "province",
			"children": [{
				
				
				"label": "重庆市",
				
				"value": "city",
				
			}]
		}, {
			"citycode": [],
			
			"label": "西藏自治区",
			
			"value": "province",
			"children": [{
				
				
				"label": "昌都市",
				
				"value": "city",
				
			}, {
				
				
				"label": "那曲市",
				
				"value": "city",
				
			}, {
				
				
				"label": "拉萨市",
				
				"value": "city",
				
			}, {
				
				
				"label": "日喀则市",
				
				"value": "city",
				
			}, {
				
				
				"label": "山南市",
				
				"value": "city",
				
			}, {
				
				
				"label": "林芝市",
				
				"value": "city",
				
			}, {
				
				
				"label": "阿里地区",
				
				"value": "city",
				
			}]
		}, {
			"citycode": [],
			
			"label": "安徽省",
			
			"value": "province",
			"children": [{
				
				
				"label": "淮北市",
				
				"value": "city",
				
			}, {
				
				
				"label": "阜阳市",
				
				"value": "city",
				
			}, {
				
				
				"label": "马鞍山市",
				
				"value": "city",
				
			}, {
				
				
				"label": "铜陵市",
				
				"value": "city",
				
			}, {
				
				
				"label": "亳州市",
				
				"value": "city",
				
			}, {
				
				
				"label": "池州市",
				
				"value": "city",
				
			}, {
				
				
				"label": "滁州市",
				
				"value": "city",
				
			}, {
				
				
				"label": "安庆市",
				
				"value": "city",
				
			}, {
				
				
				"label": "黄山市",
				
				"value": "city",
				
			}, {
				
				
				"label": "宣城市",
				
				"value": "city",
				
			}, {
				
				
				"label": "芜湖市",
				
				"value": "city",
				
			}, {
				
				
				"label": "六安市",
				
				"value": "city",
				
			}, {
				
				
				"label": "合肥市",
				
				"value": "city",
				
			}, {
				
				
				"label": "淮南市",
				
				"value": "city",
				
			}, {
				
				
				"label": "蚌埠市",
				
				"value": "city",
				
			}, {
				
				
				"label": "宿州市",
				
				"value": "city",
				
			}]
		}, {
			"citycode": [],
			
			"label": "福建省",
			
			"value": "province",
			"children": [{
				
				
				"label": "宁德市",
				
				"value": "city",
				
			}, {
				
				
				"label": "福州市",
				
				"value": "city",
				
			}, {
				
				
				"label": "龙岩市",
				
				"value": "city",
				
			}, {
				
				
				"label": "莆田市",
				
				"value": "city",
				
			}, {
				
				
				"label": "泉州市",
				
				"value": "city",
				
			}, {
				
				
				"label": "厦门市",
				
				"value": "city",
				
			}, {
				
				
				"label": "漳州市",
				
				"value": "city",
				
			}, {
				
				
				"label": "南平市",
				
				"value": "city",
				
			}, {
				
				
				"label": "三明市",
				
				"value": "city",
				
			}]
		}, {
			"citycode": [],
			
			"label": "湖南省",
			
			"value": "province",
			"children": [{
				
				
				"label": "岳阳市",
				
				"value": "city",
				
			}, {
				
				
				"label": "益阳市",
				
				"value": "city",
				
			}, {
				
				
				"label": "衡阳市",
				
				"value": "city",
				
			}, {
				
				
				"label": "娄底市",
				
				"value": "city",
				
			}, {
				
				
				"label": "长沙市",
				
				"value": "city",
				
			}, {
				
				
				"label": "张家界市",
				
				"value": "city",
				
			}, {
				
				
				"label": "怀化市",
				
				"value": "city",
				
			}, {
				
				
				"label": "湘西土家族苗族自治州",
				
				"value": "city",
				
			}, {
				
				
				"label": "常德市",
				
				"value": "city",
				
			}, {
				
				
				"label": "湘潭市",
				
				"value": "city",
				
			}, {
				
				
				"label": "郴州市",
				
				"value": "city",
				
			}, {
				
				
				"label": "永州市",
				
				"value": "city",
				
			}, {
				
				
				"label": "株洲市",
				
				"value": "city",
				
			}, {
				
				
				"label": "邵阳市",
				
				"value": "city",
				
			}]
		}, {
			"citycode": [],
			
			"label": "海南省",
			
			"value": "province",
			"children": [{
				
				
				"label": "临高县",
				
				"value": "city",
				
			}, {
				
				
				"label": "白沙黎族自治县",
				
				"value": "city",
				
			}, {
				
				
				"label": "琼中黎族苗族自治县",
				
				"value": "city",
				
			}, {
				
				
				"label": "琼海市",
				
				"value": "city",
				
			}, {
				
				
				"label": "万宁市",
				
				"value": "city",
				
			}, {
				
				
				"label": "屯昌县",
				
				"value": "city",
				
			}, {
				
				
				"label": "昌江黎族自治县",
				
				"value": "city",
				
			}, {
				
				
				"label": "东方市",
				
				"value": "city",
				
			}, {
				
				
				"label": "定安县",
				
				"value": "city",
				
			}, {
				
				
				"label": "五指山市",
				
				"value": "city",
				
			}, {
				
				
				"label": "乐东黎族自治县",
				
				"value": "city",
				
			}, {
				
				
				"label": "保亭黎族苗族自治县",
				
				"value": "city",
				
			}, {
				
				
				"label": "陵水黎族自治县",
				
				"value": "city",
				
			}, {
				
				
				"label": "儋州市",
				
				"value": "city",
				
			}, {
				
				
				"label": "三亚市",
				
				"value": "city",
				
			}, {
				
				
				"label": "三沙市",
				
				"value": "city",
				
			}, {
				
				
				"label": "澄迈县",
				
				"value": "city",
				
			}, {
				
				
				"label": "文昌市",
				
				"value": "city",
				
			}, {
				
				
				"label": "海口市",
				
				"value": "city",
				
			}]
		}, {
			"citycode": [],
			
			"label": "青海省",
			
			"value": "province",
			"children": [{
				
				
				"label": "海南藏族自治州",
				
				"value": "city",
				
			}, {
				
				
				"label": "海东市",
				
				"value": "city",
				
			}, {
				
				
				"label": "海西蒙古族藏族自治州",
				
				"value": "city",
				
			}, {
				
				
				"label": "玉树藏族自治州",
				
				"value": "city",
				
			}, {
				
				
				"label": "黄南藏族自治州",
				
				"value": "city",
				
			}, {
				
				
				"label": "果洛藏族自治州",
				
				"value": "city",
				
			}, {
				
				
				"label": "西宁市",
				
				"value": "city",
				
			}, {
				
				
				"label": "海北藏族自治州",
				
				"value": "city",
				
			}]
		}, {
			"citycode": [],
			
			"label": "广西壮族自治区",
			
			"value": "province",
			"children": [{
				
				
				"label": "北海市",
				
				"value": "city",
				
			}, {
				
				
				"label": "钦州市",
				
				"value": "city",
				
			}, {
				
				
				"label": "百色市",
				
				"value": "city",
				
			}, {
				
				
				"label": "河池市",
				
				"value": "city",
				
			}, {
				
				
				"label": "柳州市",
				
				"value": "city",
				
			}, {
				
				
				"label": "来宾市",
				
				"value": "city",
				
			}, {
				
				
				"label": "南宁市",
				
				"value": "city",
				
			}, {
				
				
				"label": "崇左市",
				
				"value": "city",
				
			}, {
				
				
				"label": "防城港市",
				
				"value": "city",
				
			}, {
				
				
				"label": "贺州市",
				
				"value": "city",
				
			}, {
				
				
				"label": "玉林市",
				
				"value": "city",
				
			}, {
				
				
				"label": "贵港市",
				
				"value": "city",
				
			}, {
				
				
				"label": "梧州市",
				
				"value": "city",
				
			}, {
				
				
				"label": "桂林市",
				
				"value": "city",
				
			}]
		}, {
			"citycode": [],
			
			"label": "宁夏回族自治区",
			
			"value": "province",
			"children": [{
				
				
				"label": "固原市",
				
				"value": "city",
				
			}, {
				
				
				"label": "中卫市",
				
				"value": "city",
				
			}, {
				
				
				"label": "石嘴山市",
				
				"value": "city",
				
			}, {
				
				
				"label": "吴忠市",
				
				"value": "city",
				
			}, {
				
				
				"label": "银川市",
				
				"value": "city",
				
			}]
		}, {
			"citycode": [],
			
			"label": "江西省",
			
			"value": "province",
			"children": [{
				
				
				"label": "新余市",
				
				"value": "city",
				
			}, {
				
				
				"label": "九江市",
				
				"value": "city",
				
			}, {
				
				
				"label": "抚州市",
				
				"value": "city",
				
			}, {
				
				
				"label": "鹰潭市",
				
				"value": "city",
				
			}, {
				
				
				"label": "赣州市",
				
				"value": "city",
				
			}, {
				
				
				"label": "南昌市",
				
				"value": "city",
				
			}, {
				
				
				"label": "宜春市",
				
				"value": "city",
				
			}, {
				
				
				"label": "吉安市",
				
				"value": "city",
				
			}, {
				
				
				"label": "景德镇市",
				
				"value": "city",
				
			}, {
				
				
				"label": "上饶市",
				
				"value": "city",
				
			}, {
				
				
				"label": "萍乡市",
				
				"value": "city",
				
			}]
		}, {
			"citycode": [],
			
			"label": "浙江省",
			
			"value": "province",
			"children": [{
				
				
				"label": "舟山市",
				
				"value": "city",
				
			}, {
				
				
				"label": "嘉兴市",
				
				"value": "city",
				
			}, {
				
				
				"label": "宁波市",
				
				"value": "city",
				
			}, {
				
				
				"label": "台州市",
				
				"value": "city",
				
			}, {
				
				
				"label": "温州市",
				
				"value": "city",
				
			}, {
				
				
				"label": "丽水市",
				
				"value": "city",
				
			}, {
				
				
				"label": "绍兴市",
				
				"value": "city",
				
			}, {
				
				
				"label": "湖州市",
				
				"value": "city",
				
			}, {
				
				
				"label": "衢州市",
				
				"value": "city",
				
			}, {
				
				
				"label": "金华市",
				
				"value": "city",
				
			}, {
				
				
				"label": "杭州市",
				
				"value": "city",
				
			}]
		}, {
			"citycode": [],
			
			"label": "河北省",
			
			"value": "province",
			"children": [{
				
				
				"label": "唐山市",
				
				"value": "city",
				
			}, {
				
				
				"label": "承德市",
				
				"value": "city",
				
			}, {
				
				
				"label": "廊坊市",
				
				"value": "city",
				
			}, {
				
				
				"label": "秦皇岛市",
				
				"value": "city",
				
			}, {
				
				
				"label": "张家口市",
				
				"value": "city",
				
			}, {
				
				
				"label": "沧州市",
				
				"value": "city",
				
			}, {
				
				
				"label": "邯郸市",
				
				"value": "city",
				
			}, {
				
				
				"label": "保定市",
				
				"value": "city",
				
			}, {
				
				
				"label": "石家庄市",
				
				"value": "city",
				
			}, {
				
				
				"label": "衡水市",
				
				"value": "city",
				
			}, {
				
				
				"label": "邢台市",
				
				"value": "city",
				
			}]
		}, {
			
			
			"label": "香港特别行政区",
			
			"value": "province",
			"children": [{
				
				
				"label": "香港",
				
				"value": "district",
				
			}]
		}, {
			
			
			"label": "台湾省",
			
			"value": "province",
			"children": [{
				
				
				"label": "台湾",
				
				"value": "district",
				
			}]
			
		}, {
			
			
			"label": "澳门特别行政区",
			
			"value": "province",
			"children": [{
				
				
				"label": "澳门",
				
				"value": "district",
				
			}]
		}, {
			
			
			"label": "甘肃省",
			
			"value": "province",
			"children": [{
				
				
				"label": "嘉峪关市",
				
				"value": "city",
				
			}, {
				
				
				"label": "酒泉市",
				
				"value": "city",
				
			}, {
				
				
				"label": "金昌市",
				
				"value": "city",
				
			}, {
				
				
				"label": "兰州市",
				
				"value": "city",
				
			}, {
				
				
				"label": "平凉市",
				
				"value": "city",
				
			}, {
				
				
				"label": "白银市",
				
				"value": "city",
				
			}, {
				
				
				"label": "天水市",
				
				"value": "city",
				
			}, {
				
				
				"label": "武威市",
				
				"value": "city",
				
			}, {
				
				
				"label": "陇南市",
				
				"value": "city",
				
			}, {
				
				
				"label": "甘南藏族自治州",
				
				"value": "city",
				
			}, {
				
				
				"label": "临夏回族自治州",
				
				"value": "city",
				
			}, {
				
				
				"label": "张掖市",
				
				"value": "city",
				
			}, {
				
				
				"label": "庆阳市",
				
				"value": "city",
				
			}, {
				
				
				"label": "定西市",
				
				"value": "city",
				
			}]
		}, {
			"citycode": [],
			
			"label": "四川省",
			
			"value": "province",
			"children": [{
				
				
				"label": "广元市",
				
				"value": "city",
				
			}, {
				
				
				"label": "南充市",
				
				"value": "city",
				
			}, {
				
				
				"label": "巴中市",
				
				"value": "city",
				
			}, {
				
				
				"label": "德阳市",
				
				"value": "city",
				
			}, {
				
				
				"label": "绵阳市",
				
				"value": "city",
				
			}, {
				
				
				"label": "成都市",
				
				"value": "city",
				
			}, {
				
				
				"label": "广安市",
				
				"value": "city",
				
			}, {
				
				
				"label": "达州市",
				
				"value": "city",
				
			}, {
				
				
				"label": "遂宁市",
				
				"value": "city",
				
			}, {
				
				
				"label": "资阳市",
				
				"value": "city",
				
			}, {
				
				
				"label": "眉山市",
				
				"value": "city",
				
			}, {
				
				
				"label": "内江市",
				
				"value": "city",
				
			}, {
				
				
				"label": "乐山市",
				
				"value": "city",
				
			}, {
				
				
				"label": "自贡市",
				
				"value": "city",
				
			}, {
				
				
				"label": "泸州市",
				
				"value": "city",
				
			}, {
				
				
				"label": "宜宾市",
				
				"value": "city",
				
			}, {
				
				
				"label": "凉山彝族自治州",
				
				"value": "city",
				
			}, {
				
				
				"label": "攀枝花市",
				
				"value": "city",
				
			}, {
				
				
				"label": "阿坝藏族羌族自治州",
				
				"value": "city",
				
			}, {
				
				
				"label": "雅安市",
				
				"value": "city",
				
			}, {
				
				
				"label": "甘孜藏族自治州",
				
				"value": "city",
				
			}]
		}, {
			"citycode": [],
			
			"label": "吉林省",
			
			"value": "province",
			"children": [{
				
				
				"label": "吉林市",
				
				"value": "city",
				
			}, {
				
				
				"label": "长春市",
				
				"value": "city",
				
			}, {
				
				
				"label": "白城市",
				
				"value": "city",
				
			}, {
				
				
				"label": "松原市",
				
				"value": "city",
				
			}, {
				
				
				"label": "辽源市",
				
				"value": "city",
				
			}, {
				
				
				"label": "四平市",
				
				"value": "city",
				
			}, {
				
				
				"label": "延边朝鲜族自治州",
				
				"value": "city",
				
			}, {
				
				
				"label": "白山市",
				
				"value": "city",
				
			}, {
				
				
				"label": "通化市",
				
				"value": "city",
				
			}]
		}, {
			
			
			"label": "天津市",
			
			"value": "province",
			"children": [{
				
				
				"label": "天津市",
				
				"value": "city",
				
			}]
		}, {
			"citycode": [],
			
			"label": "云南省",
			
			"value": "province",
			"children": [{
				
				
				"label": "昭通市",
				
				"value": "city",
				
			}, {
				
				
				"label": "曲靖市",
				
				"value": "city",
				
			}, {
				
				
				"label": "红河哈尼族彝族自治州",
				
				"value": "city",
				
			}, {
				
				
				"label": "怒江傈僳族自治州",
				
				"value": "city",
				
			}, {
				
				
				"label": "西双版纳傣族自治州",
				
				"value": "city",
				
			}, {
				
				
				"label": "玉溪市",
				
				"value": "city",
				
			}, {
				
				
				"label": "大理白族自治州",
				
				"value": "city",
				
			}, {
				
				
				"label": "丽江市",
				
				"value": "city",
				
			}, {
				
				
				"label": "迪庆藏族自治州",
				
				"value": "city",
				
			}, {
				
				
				"label": "文山壮族苗族自治州",
				
				"value": "city",
				
			}, {
				
				
				"label": "保山市",
				
				"value": "city",
				
			}, {
				
				
				"label": "普洱市",
				
				"value": "city",
				
			}, {
				
				
				"label": "昆明市",
				
				"value": "city",
				
			}, {
				
				
				"label": "楚雄彝族自治州",
				
				"value": "city",
				
			}, {
				
				
				"label": "临沧市",
				
				"value": "city",
				
			}, {
				
				
				"label": "德宏傣族景颇族自治州",
				
				"value": "city",
				
			}]
		}, {
			
			
			"label": "北京市",
			
			"value": "province",
			"children": [{
				
				
				"label": "北京市",
				
				"value": "city",
				
			}]
		}, {
			"citycode": [],
			
			"label": "山西省",
			
			"value": "province",
			"children": [{
				
				
				"label": "阳泉市",
				
				"value": "city",
				
			}, {
				
				
				"label": "太原市",
				
				"value": "city",
				
			}, {
				
				
				"label": "临汾市",
				
				"value": "city",
				
			}, {
				
				
				"label": "运城市",
				
				"value": "city",
				
			}, {
				
				
				"label": "长治市",
				
				"value": "city",
				
			}, {
				
				
				"label": "朔州市",
				
				"value": "city",
				
			}, {
				
				
				"label": "忻州市",
				
				"value": "city",
				
			}, {
				
				
				"label": "晋城市",
				
				"value": "city",
				
			}, {
				
				
				"label": "晋中市",
				
				"value": "city",
				
			}, {
				
				
				"label": "吕梁市",
				
				"value": "city",
				
			}, {
				
				
				"label": "大同市",
				
				"value": "city",
				
			}]
		}, {
			
			
			"label": "国外",
			
			"value": "province",
			"children": [{
				
				
				"label": "国外",
				
				"value": "city",
				
			}]
		}], {
	        depth: 2,
	        defaultValue: [defaultP,defaultC],
	        onChange: function onChange(result) {
	        },
	        onConfirm: function onConfirm(result) {
				//if(result!=dpc){
					//if(confirm('当前所在地发生变化？')){
						//alert(result);
						document.querySelector('#cascadePickerBtn').value=result;
						document.getElementById('xxdz').value="";
						document.getElementById('r2').click();
					//}
				//}
	        },
	        id: 'cascadePicker',
	        title: '现所在地'
	    });
	});