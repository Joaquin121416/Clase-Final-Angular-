package pe.edu.galaxy.training.java.spring.boot.jersey.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import pe.edu.galaxy.training.java.spring.boot.jersey.domain.Album;

public interface AlbumRepository extends JpaRepository<Album, Long>{
	

	@Query("select a from Album a where a.estado=1")
	public List<Album> findAllCustom();
	
	@Query("select a from Album a where upper(a.nombre) =:nombre")
	public Album findNombre(@Param("nombre") String nombre);
	
	@Query("select a from Album a where upper(a.nombre) =:nombre and a.codigo <> :codigo")
	public Album findNombreAndCodigo(@Param("nombre") String nombre, @Param("codigo") Long codigo);
	
	@Query("select a from Album a where upper(a.nombre) like :nombre and a.estado=1")
	public List<Album> findByNombre(@Param("nombre") String nombre);
	
}
