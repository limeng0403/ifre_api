function modelController($scope){
	$scope.items=[
		{name:"个人信用",request:"PCSRequest",url:"PCScore",response:"PCSResponse"},
		{name:"个人违约",request:"PCLRequest",url:"PCLcore",response:"PCLResponse"},
		{name:"企业信用",request:"OCSRequest",url:"OCScore",response:"OCSResponse"},
		{name:"企业违约",request:"OCLRequest",url:"OCLcore",response:"OCLResponse"},
	];
}

function paramsController($scope){
	$scope.items=[
		{
			name:"Profession",
			ptype:"Int",
			plen:"1",
			readme:"职业身份：1.上班族2.企业主; 3.其他(自由职业者/农民/军人/警察)",
			demo:"1"
		},
		{
			name:"IdenCard",
			ptype:"String",
			plen:"18",
			readme:"个人身份证信息",
			demo:"\"210411191234123412\""
		},
		{
			name:"YearBorn",
			ptype:"Date",
			plen:"10",
			readme:"个人身份证信息",
			demo:"\"1970-01-01\""
		},
		{
			name:"Gender",
			ptype:"Int",
			plen:"1",
			readme:"性别：1.男2.女",
			demo:"2"
		},
		{
			name:"HouseHold",
			ptype:"String",
			plen:"",
			readme:"户籍所在地 ",
			demo:"\"福建厦门\""
		}
	];
}
