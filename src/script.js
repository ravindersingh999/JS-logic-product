arr = [];

function addData() {
    var id = document.getElementById('pid').value;
    var name = document.getElementById('pname').value;
    var price = document.getElementById('pprice').value;

    console.log(id, name, price);

    data(id, price, name);
    display(arr);

}

function data(id, name, price) {
    for (var i = 0; i < arr.length; i++) {
        // console.log(arr[i]);
        if (arr[i].ID == id) {
            alert("Already exist");
            return;
        }
    }
    product = {};
    product["ID"] = id;
    product["NAME"] = price;
    product["PRICE"] = price;
    arr.push(product);

}

function display(result) {
    var text = document.getElementById("table");
    text.innerHTML = "<tr>\
    <th>Product ID</th>\
    <th>Product Name</th>\
    <th>Product Price</th>\
    </tr>"
    for (let i = 0; i < result.length; i++) {
        text.innerHTML += '<tr>\
        <td>' + result[i].ID + '</td>\
        <td>' + result[i].NAME + '</td>\
        <td>' + result[i].PRICE + '</td>\
        </tr>';
    }
}