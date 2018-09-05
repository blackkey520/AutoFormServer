 {% extends "../layout/basiclayout.tpl" %}
{% block head %}

     <link href="/public/css/plugins/dataTables/dataTables.bootstrap.css" rel="stylesheet">
      {{ super() }}
{% endblock %}
 {% block moduletitle %}<h5>数据库配置 <small>数据库列表</small></h5>{% endblock %}
{% block content %}
 <div class="">
    <a data-toggle="modal" onclick="window.location.href='add'"  class="btn btn-primary" data-target="#modal">添加行</a>
</div>
<table style="font-size: 13px" class="table table-striped table-bordered table-hover dataTables-example">
    <thead>
        <tr>
            <th>数据库名称</th>
            <th>数据库类别</th>
            <th>连接IP</th>
            <th>用户名</th>
            <th>密码</th>
            <th>备注</th>
            <th>操作</th>
        </tr>
    </thead>
    <tbody> 
    {% for item in cfg_db_list.rows %}
    <tr class="gradeX">
        <td>{{ item.DB_KEY }}</td>
        <td>{{ item.DB_NAME }}</td>
        <td>{{ item.DB_VERSION }}</td>
        <td>{{ item.DB_USERNAME }}</td>
        <td>{{ item.DB_PWD }}</td>
        <td>{{ item.DB_MARK }}</td>
        <td>
            <div class="tpl-table-black-operation">
                <button onclick="window.location.href='edit?DB_KEY={{ item.DB_KEY }}'" type="button" class="btn btn-primary btn-xs">编辑</button>
                <button onclick="window.location.href='del?DB_KEY={{ item.DB_KEY }}'" type="button" class="btn btn-danger btn-xs">删除</button>
            </div>
        </td>
    </tr>
    {% endfor %}
    </tbody>
</table>
{% endblock %}
{% block script %}
{{ super() }}
<script src="/public/js/plugins/jeditable/jquery.jeditable.js"></script>
<script src="/public/js/plugins/dataTables/jquery.dataTables.js"></script>
<script src="/public/js/plugins/dataTables/dataTables.bootstrap.js"></script>
{% endblock %}