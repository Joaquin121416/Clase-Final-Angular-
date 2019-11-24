package pe.edu.galaxy.training.java.spring.boot.jersey.domain;
       
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@Entity
@NoArgsConstructor
@ToString
public class Album {
	
	@Id
	@Column(name="CODIGO")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seqAlbum")
	@SequenceGenerator(name = "seqAlbum", allocationSize = 1, sequenceName = "SEQ_ALBUM")
	private Long codigo=0L;
	
	@Column(name="NOMBRE")
	private String nombre;

	@Column(name="DESCRIPCION")
	private String descripcion;
	
	@Column(name="ESTADO")
	private String estado;

	
}
