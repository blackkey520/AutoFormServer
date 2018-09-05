 {% extends "../layout/basiclayout.tpl" %}
{% block head %}
      {{ super() }}
{% endblock %}

 {% block moduletitle %}<h5>数据库配置 <small>添加数据库</small></h5>{% endblock %}
{% block content %}
 <form action="create" method = 'post'  id="form_cfg_db" class="form-horizontal m-t">
    <div class="form-group">
        <label for="DB_KEY" class="col-sm-3 control-label">数据库编号</label>
        <div class="col-sm-8">
            <input id="DB_KEY" name="DB_KEY" class="form-control" type="text"/>
            <span class="help-block m-b-none"><i class="fa fa-info-circle"></i> 请输入数据库编号(唯一)</span>
        </div>
    </div>
    <div class="form-group">
        <label for="DB_NAME" class="col-sm-3 control-label">数据库名称</label>
        <div class="col-sm-8">
            <input id="DB_NAME" name="DB_NAME" class="form-control" type="text" />
        </div>
    </div>
    <div class="form-group">
        <label for="DB_VERSION" class="col-sm-3 control-label">数据库类别</label>
        <div class="col-sm-8">
            <label class="checkbox-inline">
                <input type="radio" checked value="mysql" id="mysql" name="DB_VERSION">mysql</label>
            <label class="checkbox-inline">
                <input type="radio"  value="sqlite" id="sqlite" name="DB_VERSION">sqlite</label>
            <label class="checkbox-inline">
                <input type="radio"  value="postgres" id="postgres" name="DB_VERSION">postgres</label>
            <label class="checkbox-inline">
                <input type="radio" value="mssql" id="mssql" name="DB_VERSION">mssql</label>
        </div>
    </div> 
    <div class="form-group">
        <label for="DB_IP" class="col-sm-3 control-label">连接地址</label>
        <div class="col-sm-8">
            <input id="DB_IP" name="DB_IP" class="form-control" type="text" />
        </div>
    </div>
    <div class="form-group">
        <label for="DB_USERNAME" class="col-sm-3 control-label">数据库用户</label>
        <div class="col-sm-8">
            <input id="DB_USERNAME" name="DB_USERNAME" class="form-control" type="text" />
        </div>
    </div>
    <div class="form-group">
        <label for="DB_PWD" class="col-sm-3 control-label">数据库密码</label>
        <div class="col-sm-8">
            <input id="DB_PWD" class="form-control" type="password"  name="DB_PWD" />
        </div>
    </div>
    <div class="form-group">
        <label for="DB_MARK" class="col-sm-3 control-label">备注</label>
        <div class="col-sm-8">
            <textarea id="DB_MARK" class="form-control"  name="DB_MARK" ></textarea>
        </div>
    </div>
    <div class="form-group">
        <div class="col-sm-8 col-sm-offset-3">
            <button  class="btn btn-primary" type="submit">提交</button>
            <button type="button" onclick="window.location.href='list'" class="btn btn-default">返回</button>
        </div>
    </div>
</form>
{% endblock %}
{% block script %}
{{ super() }}
<script src="/public/js/plugins/validate/jquery.validate.min.js"></script>
<script src="/public/js/plugins/validate/messages_zh.min.js"></script> 
<script>
$.validator.setDefaults({
    highlight: function(e) {
        $(e).closest(".form-group").removeClass("has-success").addClass("has-error")
    },
    success: function(e) {
        e.closest(".form-group").removeClass("has-error").addClass("has-success")
    },
    errorElement: "span",
    errorPlacement: function(e, r) {
        e.appendTo(r.is(":radio") || r.is(":checkbox") ? r.parent().parent().parent() : r.parent())
    },
    errorClass: "help-block m-b-none",
    validClass: "help-block m-b-none"
}),
    $().ready(function() {
        $("#form_cfg_db").validate({
        rules: {
            DB_KEY: {
                    required: true,
                    remote: '../api/validate/validatedb'
                },
                DB_NAME: "required",
                DB_IP: "required",
                DB_USERNAME: "required",
                DB_PWD: "required",
                DB_MARK: "required",
        },
        messages: {
            DB_KEY: {
                    required: "必填",
                    remote: "数据库编号已存在"
                },
                DB_NAME: "必填",
                DB_IP: "必填",
                DB_USERNAME: "必填",
                DB_PWD: "必填",
                DB_MARK: "必填",
        }
    });
         
    });
</script>
{% endblock %}