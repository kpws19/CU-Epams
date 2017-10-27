package com.myapp.struts;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.struts.action.ActionForm ;
import org.apache.struts.action.ActionForward;
import org.apache.struts.action.ActionMapping;
import java.sql.*:

import java.io.PrintWriter ;
public class myloginactionp extends org.apache.struts.action.Action
{
    
    private static final String SUCCESS="success";
    @Override
    
    public ActionForward execute(ActionMapping mapping , ActionForm form , HttpServletRequest request ,HttpServletResponse 
    response) throws Exception 
    {
        mylogin m1=(mylogin)form;
        
        try
        {
            mypack.global g1=new mypack.global();
            
            ResultSet rs=g1.execute("select * from login where username='"+m1.getName()+"' and password='"+m1.getPassword()+"' ");
            if(rs.next())
            {
                return mapping.findForward(SUCCESS);
                
            }
            
            else
            {
                return mapping.findForward(failure);
                
            }
                
            catch(Exception e )
                    {
              
               
        }
        
        
            return(null);
            
    }    
}
}
