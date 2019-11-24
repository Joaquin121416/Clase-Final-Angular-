package pe.edu.galaxy.training.java.spring.boot.jersey.resources;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Response {
	
	private int codigo;
	private String mensaje;
	
	@JsonInclude(JsonInclude.Include.NON_NULL)
	private Object data;

}
