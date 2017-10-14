<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.Connection"%>
<%@page import="java.sql.Statement"%>
<!--starting page-->
<!--USER RESTRICTED TO CHANGE CODE-->
<!DOCTYPE html>
<%@ page language="java" contentType="text/html;charset=UTF-8" %>

<html lang="en-US">
    <head>
        <title>CU-Epams-SignUp</title>
        <link rel="stylesheet" href="styles/design4.css" />
        <link rel="stylesheet" href="styles/design5.css" />
        <link rel="stylesheet" href="styles/design6.css" />
        <link rel="stylesheet" href="media/screen1.css" />
        <link rel="shortcut icon" type="image/x-icon" href="icons/imgicon.ico" />
    </head>
    <body background="images2/loginpage.jpg">

        <br />

        <aside>CU-Epams</aside>
        <!--For signup form-->
        <ul>
            <li>
        <section>

            <button  class="first" type="button" onclick="document.getElementById('id01').style.display='block'" style="width:auto;">SIGNUP</button>
            <div id="id01" class="modal">
                <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">×</span>

                   <form class="modal-content animate" action="/action_page.php">
                       <div class="container">
                         <img src="images2/chitkaralogo.png" alt="chitkara logo" class="avatar" id="chitkaralogo"/><br />
                         <label><b>Name:</b></label>
                          <input type="text" placeholder="Enter your Name" name="name" required>
                          <label><b>Roll No.:</b></label><br />
                          <input type="number" placeholder="Enter your Roll No." max="9999999999" name="rollno" required><br />
                          <label><b>Email Address:</b></label><br />
                          <input type="email" placeholder="Enter your email address" name="emailaddress" required><br />
                          <label><b>Stream:</b></label>
                          <input type="text" placeholder="Enter your Stream" name="stream" required><br />
                          <label><b>Date of Birth:</b></label><br />
                          <input type="date" min="19-10-1998" max="18-10-2017" required><br />
                          <label><b>Gender:</b></label><br />
                          <input type="radio" id="Male" name="gender" /><label>Male</label>
                          <input type="radio" name="gender" id="Female" /><label>Female</label>
                          <br /><br />
                          <label><b>Phone No.</b></label>
                          <input type="number" placeholder="enter phone no." min="0000000000" max="9999999999" required><br />
                          <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
                           <div class="clearfix">
                              <button type="submit" class="signupbtn">Sign Up</button>
                              <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>

                          </div>
                      </div>
                  </form>
            </div>
            <script type="text/javascript" src="js/script1.js"></script>
        </section>
            </li>
        <!--for signin form-->
        <li>
        <section>
            <button style="width:auto;" class="second" type="button" >LOGIN</button>



        </section>
        </li>
        </ul>
        <!--for guest logins-->
        <section>

            <p class="uper">Exceed your expectations here at CU-Epams.. </p>

            <form action="guest.jsp">
            <input class="centeral" type="text" placeholder="Full Name" name="t1" required/><br />
            <input class="centeral" type="email" placeholder="Email Address" name="t2" required/><br />
            <button class="third">SIGN UP FOR GUEST</button>
            <p class="lower">By signing up you'll be agreeing to our terms of <a href="#">service</a> and <a href="#">privacy policy</a>.</p>
            </form>
	   <input name="t1" type="text" value=<%=request.getParameter("t1") %>>
           <input name="t2" type="text" value=<%=request.getParameter("t2") %>>
            <%
            Statement stmt;
            Connection con;
            con = DriverManager.getConnection("jdbc:mysql:///backend", "root", "root");
            String name=request.getParameter("t1");
            String mail=request.getParameter("t2");
            stmt = con.createStatement();
            int i=stmt.executeUpdate("insert into guest_credentials(name,mail) values('"+name+"','"+mail+"')");

            if(i>0)
    {
        out.println("added");
    }
            else
            {
               out.println("sorry");
}
%>


        </section>




        <footer>
        Founded by <a href="#">NOVATE</a> and <a href="#">MARK-1V</a>

        </footer>
    </body>
</html>
