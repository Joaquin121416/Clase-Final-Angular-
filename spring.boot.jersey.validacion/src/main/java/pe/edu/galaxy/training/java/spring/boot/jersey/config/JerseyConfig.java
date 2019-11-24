package pe.edu.galaxy.training.java.spring.boot.jersey.config;

import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.stereotype.Component;

import pe.edu.galaxy.training.java.spring.boot.jersey.filter.CORSFilter;
import pe.edu.galaxy.training.java.spring.boot.jersey.resources.AlbumResource;
import pe.edu.galaxy.training.java.spring.boot.jersey.resources.DemoResource;

@Component
public class JerseyConfig extends ResourceConfig
{
    public JerseyConfig()
    {
        register(DemoResource.class);
        register(AlbumResource.class);
        register(new CORSFilter());
    }
}