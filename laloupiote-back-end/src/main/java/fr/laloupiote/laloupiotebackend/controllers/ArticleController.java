package fr.laloupiote.laloupiotebackend.controllers;

import java.io.File;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import com.fasterxml.jackson.annotation.JsonView;

import fr.laloupiote.laloupiotebackend.entities.Article;
import fr.laloupiote.laloupiotebackend.entities.ArticleFile;
import fr.laloupiote.laloupiotebackend.entities.View;
import fr.laloupiote.laloupiotebackend.repositories.ArticleRepository;
import fr.laloupiote.laloupiotebackend.repositories.FileRepository;

@CrossOrigin(origins= {"*"})
@RestController
public class ArticleController {
	@Autowired
	ArticleRepository articleRepository;

	@GetMapping( "articles" )
	public List<Article> index() throws Exception{
		try {
			return articleRepository.findAll();
		} catch( Exception param_exception) {
			throw new ResponseStatusException(
					HttpStatus.NOT_FOUND,
					"No article found"
			);
		}
		
	}
	
	@GetMapping( "articles/{id}" )
	public Article show( @PathVariable("id") Long param_id) throws Exception {
		try {
			return articleRepository.findById(param_id).get();
		} catch( Exception param_exception ) {
			throw new ResponseStatusException(
					HttpStatus.NOT_FOUND,
					"no article found for id: " + param_id
					);
			}
	}

	@PostMapping("articles")
	public Article create( @RequestBody Article article) throws Exception{
		try {
			if( article.getContent() != "" && article.getStartDate() != ""  && article.getEndDate() != "") {
				return articleRepository.save(article);
			}else {
				throw new ResponseStatusException(
						HttpStatus.BAD_REQUEST,
						"no field should be empty"
						);
			}
		} catch( Exception param_exception) {
			throw new ResponseStatusException(
					HttpStatus.BAD_REQUEST,
					"no field should be empty"
					);
		}
		
	}
    @PutMapping("articles/{id}")
    public Article update(@PathVariable("id") Long param_id, @RequestBody Article param_article) 
		throws Exception {
    	
    	try {
	    	return articleRepository.save(param_article);
    	}
    	catch( Exception param_exception ) {
    		throw new ResponseStatusException(
	          HttpStatus.NOT_FOUND, 
	          "no article found for id: " + param_id
    		);
    	}
    }
    
    @DeleteMapping("articles/{id}")
    public boolean delete(@PathVariable("id") Long param_id) throws Exception {
    	
    	try {
    		articleRepository.deleteById(param_id);
        	return true;
    	}
    	catch( Exception param_exception ) {
    		throw new ResponseStatusException(
	          HttpStatus.NOT_FOUND, 
	          "no article found for id: " + param_id
    		);
    	}
    	
    	
    }
//	################################### POST UPLOAD FILE ########################
    
    @Autowired
    FileRepository fileRepository;
    
	@PostMapping("file/upload")
	public String uploadFile( @RequestParam("file") MultipartFile transferedFile) throws Exception{
		try {

			File tmp = new File("../laloupiote/src/assets/files/").getCanonicalFile();

			String destination = tmp.getPath() + "/" + transferedFile.getOriginalFilename();

			File data = new File(destination);

			transferedFile.transferTo(data);



			ArticleFile articleFile = new ArticleFile(transferedFile.getOriginalFilename(), destination);
			 fileRepository.save( articleFile);

			return destination;

		}catch( Exception param_exception) { 
				throw new ResponseStatusException(
					HttpStatus.BAD_REQUEST,
					"No file found");
			}
	}
	
//	################### READ (DOWNLOAD ALL)###################
	@JsonView(View.FileInfo.class)
	@GetMapping("files/all")
	public List<ArticleFile> getAllFiles() throws Exception{
		try {
			return fileRepository.findAll();
		}catch( Exception param_exception) {
			throw new ResponseStatusException(
					HttpStatus.NOT_FOUND,
					"No file found");
		}
	}

	
}
