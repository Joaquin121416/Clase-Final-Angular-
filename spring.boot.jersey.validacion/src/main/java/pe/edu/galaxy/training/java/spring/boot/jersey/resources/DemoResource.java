package pe.edu.galaxy.training.java.spring.boot.jersey.resources;

import javax.ws.rs.GET;
import javax.ws.rs.Path;

@Path("/demo")
public class DemoResource {
	
	@GET
	public String demo() {
		return "Jersey";
	}

	
	
}

