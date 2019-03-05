package fr.laloupiote.laloupiotebackend.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;

import com.fasterxml.jackson.annotation.JsonView;

@Entity
public class Image {
	@Id
	@GeneratedValue( strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	@JsonView(View.FileInfo.class)
	private Long id;
	
	@Column(name = "name")
	@JsonView(View.FileInfo.class)
    private String name;
	    
    @Column(name = "path")
	private String path;
	

//	Controller
    public Image() { }
    public Image(String param_name, String param_path) {
    	name = param_name;
    	path = param_path;
    }
public String getpath() {
		return path;
	}
	public void setpath(String path) {
		this.path = path;
	}
	//	Getter & Setter
    public Long getId() {
    	return id;
    }

	public String getName() {
		return name;
	}

	public void setName(String param_name) {
		name = param_name;
	}

}
