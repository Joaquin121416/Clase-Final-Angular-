package pe.edu.galaxy.training.java.spring.boot.jersey.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import lombok.Data;
import pe.edu.galaxy.training.java.spring.boot.jersey.domain.Album;
import pe.edu.galaxy.training.java.spring.boot.jersey.repository.AlbumRepository;

@Service
@Data
public class AlbumServiceImpl implements AlbumService{

	@Autowired
	private AlbumRepository albumRepository;
	
	@Override
	public List<Album> findAll() {
		return this.getAlbumRepository().findAllCustom();
	}

	@Override
	public Optional<Album> findById(Long id) {
		return this.getAlbumRepository().findById(id);
	}

	@Override
	public Album save(Album album) {
		return this.getAlbumRepository().save(album);
	}

	@Override
	public void delete(Album album) {
		 this.getAlbumRepository().delete(album);
	}

	@Override
	public List<Album> findByNombre(String nombre) {
		nombre=(nombre==null)?"":nombre.toUpperCase();
		return this.getAlbumRepository().findByNombre("%"+nombre+"%");
	}

	@Override
	public Album findNombre(Album album) {
		String nombre=(album.getNombre()==null)?"":album.getNombre().toUpperCase();
		Album oAlbum;
		System.out.println("album.getCodigo() "+album.getCodigo());
		if (album.getCodigo()==0) {
			oAlbum=this.getAlbumRepository().findNombre(nombre);
		}else {
			oAlbum=this.getAlbumRepository().findNombreAndCodigo(nombre,album.getCodigo());
		}
		return oAlbum;
	}


}
