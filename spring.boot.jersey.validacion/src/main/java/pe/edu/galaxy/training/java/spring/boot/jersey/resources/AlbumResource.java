package pe.edu.galaxy.training.java.spring.boot.jersey.resources;

import java.util.List;
import java.util.Optional;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import lombok.Data;
import pe.edu.galaxy.training.java.spring.boot.jersey.domain.Album;
import pe.edu.galaxy.training.java.spring.boot.jersey.service.AlbumService;

@Path("/albums")
@Data
@Produces("application/json")
@Consumes("application/json")
public class AlbumResource {
	
	@Autowired
	private AlbumService albumService;
	
	@GET
	public Response findAll(){
		List<Album> lst=this.getAlbumService().findAll();
		if (lst!=null && lst.size()>0) {
			return new Response(1,"Exito al consultar",lst );
		}
		return new Response(0,"No existen registros",null);
	}
	
	@GET
	@Path("/{id}")
	public Response findById(@PathParam("id") Long id){
		if (id==null) {
			return new Response(0,"El id es requerido",null);
		}
		if (id<=0) {
			return new Response(0,"El id debe ser mayor que 0",null);
		}
		
		Optional<Album> oAlbum=this.getAlbumService().findById(id);
		if (oAlbum!=null && oAlbum.isPresent()) {
			return new Response(1,"Exito al consultar",oAlbum.get());
		}
		return new Response(0,"No existe registro con el id = "+ id,null);
	}
	
	@GET
	@Path("/by-nombre")
	public Response findByNombre(@QueryParam("nombre") String nombre){
		if (nombre==null || nombre.trim().length()<0) {
			return new Response(0,"El parámetro nombre es requerido y debe tener como mínimo 3 caracteres",null);
		}
		List<Album> lst=this.getAlbumService().findByNombre(nombre);
		if (lst!=null && lst.size()>0) {
			return new Response(1,"Exito al consultar",lst );
		}
		return new Response(0,"No existen registros",null);
	}
	
	
	@POST
	public Response post(Album album) {
		if (album==null) {
			return new Response(0,"El album es requerido",null);
		}
		
		if (album.getNombre()==null || album.getNombre().trim().length()<3) {
			return new Response(0,"El nombre es requerido y debe tener como mínimo 3 caracteres",null);
		}
		if (album.getDescripcion()==null || album.getDescripcion().trim().length()<3) {
			return new Response(0,"La descripcion es requerida y debe tener como mínimo 5 caracteres",null);
		}
		if (album.getEstado()==null) {
			album.setEstado("1");
		}
		Album oAlbum= this.getAlbumService().findNombre(album);
		if (oAlbum!=null) {
			return new Response(0,"Ya existe un album con el nombre ingresado",null);
		}
		
		oAlbum=this.getAlbumService().save(album);
		
		if (oAlbum==null) {
			return new Response(-1,"Error al registrar el album",null);
		}
		return new Response(0,"Exito al registrar el album",oAlbum);
	}

	@PUT
	@Path("/{id}")
	public Response update(@PathParam("id") Long id, Album album){
		if (album==null) {
			return new Response(0,"El album es requerido",null);
		}
		if (id==null) {
			return new Response(0,"El id es requerido",null);
		}
		if (id<=0) {
			return new Response(0,"El id debe ser mayor que 0",null);
		}

		Optional<Album> oAlbum= this.getAlbumService().findById(id);
		if (oAlbum==null) {
			return new Response(0,"No existe album con el id ="+ id + " especificado",null);
		}
		if (oAlbum!=null && oAlbum.isPresent()) {
			BeanUtils.copyProperties(album, oAlbum.get());
			 oAlbum.get().setCodigo(id);
			 System.out.println("oAlbum.get() "+oAlbum.get());
			return this.post(oAlbum.get());
		}
		return new Response(0,"No existe album con el id="+ id + " especificado",null);
	}


	@DELETE
	@Path("/{id}")
	public Response delete(@PathParam("id")  Long id){
		
		if (id==null) {
			return new Response(0,"El id es requerido",null);
		}
		if (id<=0) {
			return new Response(0,"El id debe ser mayor que 0",null);
		}
		Optional<Album> oAlbum= this.getAlbumService().findById(id);
		if (oAlbum!=null && oAlbum.isPresent()) {
			 oAlbum.get().setEstado("0");
			Album album=this.getAlbumService().save(oAlbum.get());
			if (album!=null) {
				return new Response(1,"Exito al eliminar el album",album);
			}
			return new Response(-1,"Error al eliminar el album",null);
		}
		return new Response(0,"No existe album con el id="+ id + " especificado",null);
	}
	
	
}
