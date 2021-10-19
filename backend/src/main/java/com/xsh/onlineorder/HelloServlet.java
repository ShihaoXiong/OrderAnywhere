package com.xsh.onlineorder;

import java.io.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import org.json.JSONObject;
import org.apache.commons.io.IOUtils;

@WebServlet(name = "helloServlet", value = "/hello-servlet")
public class HelloServlet extends HttpServlet {
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("application/json");

        JSONObject customer = new JSONObject();
        customer.put("email", "shihao.xiong@icloud.com");
        response.getWriter().println(customer);
    }

    public void doPost(HttpServletRequest request, HttpServletResponse response) throws  IOException {
        JSONObject json = new JSONObject(IOUtils.toString(request.getReader()));
        String email = json.getString("email");

        System.out.println("Email is: " + email);

        response.setContentType("application/json");
        JSONObject jsonRes = new JSONObject();
        jsonRes.put("status", "ok");
        response.getWriter().print(jsonRes);
    }

    public void destroy() {
    }
}