package fr.laloupiote.laloupiotebackend.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonView;

@Entity
public class ArticleFile {
	@Id
	@GeneratedValue( strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "name")
	@JsonView(View.FileInfo.class)
	private String name;
	
	@Column(name = "path")
	private String filePath;
	
	public ArticleFile() {}
	public ArticleFile(String param_name, String param_filePath) { 
		name = param_name;
		filePath = param_filePath;
	}

	public String getFilePath() {
		return filePath;
	}

	public void setFilePath(String filePath) {
		this.filePath = filePath;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
}
