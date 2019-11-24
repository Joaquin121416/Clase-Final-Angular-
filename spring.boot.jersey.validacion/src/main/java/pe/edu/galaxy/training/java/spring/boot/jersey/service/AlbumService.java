package pe.edu.galaxy.training.java.spring.boot.jersey.service;

import java.util.List;
import java.util.Optional;
import pe.edu.galaxy.training.java.spring.boot.jersey.domain.Album;

public interface AlbumService {
	
	public List<Album> findAll();
	
	public Optional<Album> findById(Long id);
	
	public Album save(Album album);
	
	public void delete(Album album);
	
	public Album findNombre(Album album);
	
	public List<Album> findByNombre(String nombre);
	
}
