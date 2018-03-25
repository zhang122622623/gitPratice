var TodoList = function(name) {
    this.list = document.querySelector('[data-list="' + name + '"]');
    this.childs = this.list.querySelectorAll('li');
    this.input = document.querySelector('[data-input="' + name + '"]');
    this.checkAll = document.getElementsByClassName('check-all')[0];
    this.checkInverse = document.getElementsByClassName('check-inverse')[0];
    this.deleteSelect = document.getElementsByClassName('delete-select')[0];
    this.storage = window.localStorage;
    if(!this.storage.arr) {
        this.arr = [];
    }else {
        this.arr = this.storage.arr.split(',');
        for(var i = 0; i < this.arr.length; i++){
            var oLi = '<li><span><input type="checkbox">'+this.arr[i]+'</span><div class="delete-x" style="display:none;">x<div></li>';
            this.list.innerHTML += oLi;
        }
    }
    
    
    this.init = function() {
        this.input.addEventListener('keyup', function(event) {
            this.handleKeyup(event);
        }.bind(this));

        this.checkAll.addEventListener('click', function(event){
            this.childs = this.list.querySelectorAll('li span input');
            this.checkAllEle(event, this.childs);
        }.bind(this));

        this.checkInverse.addEventListener('click', function(event){
            this.childs = this.list.querySelectorAll('li span input');
            this.checkInverseEle(event, this.childs);
        }.bind(this));

        this.deleteSelect.addEventListener('click', function(event){
            this.childs = this.list.querySelectorAll('li span input');
            this.confirmDeleteSelect(this.childs);
        }.bind(this));

        this.list.addEventListener('mouseover', function (event) {
            this.addDeleteBtn(event);
        }.bind(this),false);
        
        this.list.addEventListener('mouseout',function (event) {
            this.removeDeleteBtn(event);
        }.bind(this),false);

        this.list.addEventListener('click', function (event) {
            this.removeXBtn(event);
        }.bind(this));
    };
}

TodoList.prototype.storageFun = function (data) {
    this.storage.setItem('arr', this.arr);
}

TodoList.prototype.confirmDelete = function (target) {
    var r = confirm("是否要删除");
    if (r == true) {
        this.list.removeChild(target);
        this.arr.splice(this.arr.indexOf(target.firstChild.innerText),1);
        this.storage.arr = this.arr;
    }
}

TodoList.prototype.confirmDeleteSelect = function (ele) {
    var r = confirm("是否要删除选中项");
    if(r == true) {
        this.deleteSelectEle(ele);
    }
}

TodoList.prototype.removeXBtn = function (event) {
    var target = event.target || event.srcElement;
    var targetName = target.nodeName.toLowerCase();
    if(targetName === 'li') {
        this.confirmDelete(target);
    }
    else if( targetName=== 'span'||targetName === 'div'){
        this.confirmDelete(target.parentNode);
    }
}

TodoList.prototype.addDeleteBtn = function (event) {
    var target = event.target || event.srcElement;
    var targetName = target.nodeName.toLowerCase();
    if(targetName === 'li'){
        target.lastChild.style.display = 'block';
    }
    else if(targetName=== 'span'){
        target.parentNode.lastChild.style.display = 'block';
    }
    else if(targetName === 'div'){
        target.parentNode.lastChild.style.display = 'block';
    }
}

TodoList.prototype.removeDeleteBtn = function (event) {
    var target = event.target || event.srcElement;
    var targetName = target.nodeName.toLowerCase();
    if(targetName === 'li'){
        target.lastChild.style.display = 'none';
    }
    else if(targetName === 'span'){
        target.parentNode.lastChild.style.display = 'none';
    }
    else if(targetName === 'div'){
        target.parentNode.lastChild.style.display = 'none';
    }
}

TodoList.prototype.deleteSelectEle = function (childs) {
    var len = childs.length;
    for(var i = 0; i < len; i++) {
        if(childs[i].checked) {
            this.deleteEle(childs[i]);
        }
    }
}

TodoList.prototype.deleteEle = function (ele) {
    this.list.removeChild(ele.parentNode.parentNode);
    this.arr.splice(this.arr.indexOf(ele.parentNode.innerText),1);
    this.storage.arr = this.arr;
}

TodoList.prototype.checkInverseEle = function (event, childs) {
    var len = childs.length;
    for(var i = 0; i < len; i++){
        if(childs[i].checked) {
            childs[i].checked = false;
        }else {
            childs[i].checked = true;
        }
    }
}

TodoList.prototype.checkAllEle = function (event, childs) {
    var len = childs.length;
    for(var i = 0; i < len; i++){
        if(!childs[i].checked) {
            for(var j = 0; j < len; j++){
                if(!childs[j].checked){
                    childs[j].checked = true;
                }
            }
        }
    }
}

TodoList.prototype.handleKeyup = function(event) {
    event.preventDefault();
    event.stopPropagation();
    this.addItem(event.keyCode, event.target);
}

TodoList.prototype.addItem = function(keyCode, target) {
    if(event.keyCode == 13 && event.target.value.trim().length > 0) {
        this.append();
        this.clearInput();
        this.childs = this.list.querySelectorAll('li');
    }
}

TodoList.prototype.append = function() {
    var oLi = '<li><span><input type="checkbox">'+this.input.value.trim()+'</span><div class="delete-x" style="display:none;">x<div></li>';
    var value = this.input.value.trim();
    this.arr.push(value);
    this.list.innerHTML += oLi;
    this.storageFun(value, this.arr);
    this.clearInput();
};

TodoList.prototype.clearInput = function() {
    this.input.value = '';
}

var todo = new TodoList('work');
todo.init();