<%@ page language="java" contentType="application/json; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="org.json.simple.*" %>
<%@ page import="java.sql.*" %>
<%
	request.setCharacterEncoding("utf-8");

	String nickname = (String)session.getAttribute("nickname");
	
	String driver = "oracle.jdbc.OracleDriver";
	String url = "jdbc:oracle:thin:@localhost:1521:orcl";
	String id = "scott";
	String pw = "1234";
	
	Class.forName(driver);
	Connection db = DriverManager.getConnection(url, id, pw);
	
	String sql = "select guestbook_idx, guestbook_nickname, guestbook_content from guestbook_table order by guestbook_idx desc";
	Statement stmt = db.createStatement();
	ResultSet rs = stmt.executeQuery(sql);
	
	JSONObject root = new JSONObject();
	root.put("user_nickname", nickname);
	
	JSONArray data_list = new JSONArray();
	root.put("data_list", data_list);
	
	while(rs.next()){
		JSONObject obj = new JSONObject();
		obj.put("guestbook_idx", rs.getInt("guestbook_idx"));
		obj.put("guestbook_nickname", rs.getString("guestbook_nickname"));
		obj.put("guestbook_content", rs.getString("guestbook_content"));
		
		data_list.add(obj);
	}
%>
<%= root.toJSONString() %>










