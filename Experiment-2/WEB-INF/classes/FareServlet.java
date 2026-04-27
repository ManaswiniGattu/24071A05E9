import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class FareServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("text/html; charset=UTF-8");
        PrintWriter out = response.getWriter();

        double distance = Double.parseDouble(request.getParameter("distance"));
        double fare = 0;

        if (distance <= 10) {
            fare = distance * 10;
        } else if (distance <= 30) {
            fare = (10 * 10) + ((distance - 10) * 8);
        } else {
            fare = (10 * 10) + (20 * 8) + ((distance - 30) * 5);
        }

        out.println("<!DOCTYPE html>");
        out.println("<html>");
        out.println("<head>");
        out.println("<meta charset='UTF-8'>");
        out.println("<title>Fare Result</title>");
        out.println("</head>");
        out.println("<body>");

        out.println("<h2>Distance: " + distance + " km</h2>");
        out.println("<h2>Total Fare: " + String.format("%.2f", fare) + " INR</h2>");
	out.println("<h2>24071A05E9</h2>");
        out.println("</body>");
        out.println("</html>");
    }
}