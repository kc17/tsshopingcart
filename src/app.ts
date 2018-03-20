//import Caculate from './caculate'

// 載入所有儲存在localStorage的資料
loadAll();
//儲存資料  
function save() {
    var goods = $("#goods").val() as number;
    var price = $("#price").val() as number;
    localStorage.setItem(price.toString(), goods.toString());
    loadAll();
    alert("新增成功");
}
//查詢資料  
function find() {
    var search_price = $("#search_price").val() as string;
    var price = localStorage.getItem(search_price);
    var find_result = $("#find_result");
    find_result.html(search_price + "的價格是：" + price);
}
//將所有儲存在localStorage中的物件提取出來，並展現到介面上
function loadAll() {
    var list = $("#list");
    if (localStorage.length > 0) {
        var result = "<table>";
        result += "<tr><td>商品</td><td>價格</td><td>操作</td></tr>";
        for (var i = 0; i < localStorage.length; i++) {
            var price = localStorage.key(i);
            var goods = localStorage.getItem(price!);
            result += "<tr><td>" + price + "</td><td>" + goods +
                "</td><td><button id = 'btn3' onclick='deleteGoods(this)'>刪除</button></td></tr>";
        }
        result += "</table><br/><strong><label>總價格：</label><span id='amount'></span></strong>";
        list.html(result)
    } else {
        list.html("購物車是空的");
    }
    //每次載入商品資訊同時重新整理總價格
    Count();
}
//刪除購物車商品
function deleteGoods(item: any) {
    var val = item.parentNode.parentNode;
    var children1 = val.children[0].innerText;
    var children2 = val.children[1].innerText;
    localStorage.removeItem(children1);
    loadAll();
}

function Count() {
    var goodsNum = $('tr') as any;
    var amount = 0;
    for (var i = 1; i < goodsNum.length; i++) {
        amount += parseInt(goodsNum[i].children[1].innerText);

    }
    //alert("總價是："+amount);
    //alert("amount.toString:"+amount.toString());

    var test = $('#amount').html(amount.toString());
}
