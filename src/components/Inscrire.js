import React from "react";
import { Typography, Card, CardContent, Grid, TextField, Button, InputBase } from "@material-ui/core";
import Checkbox from "@material-ui/core";
import FormLabel from "@material-ui/core";
import { Home } from "@material-ui/icons";
import { Box } from "@material-ui/core";
import { useState, useEffect } from "react";
import { borderColor, margin, padding } from "@mui/system";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));

const Inscrire = () => {
    const initialValues = { Nom: "", Prénon: "", email: "", };
    const [formValues, setFormValues] = useState(initialValues);
    const [FormErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const classes = useStyles();
    const handleChange = (e) => {
        console.log(e.target);
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);


    };
    useEffect(() => {
        console.log(FormErrors);
        if (Object.keys(FormErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }

    }, [FormErrors])



    const validate = (values) => {
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.Nom) {
            errors.Nom = "Username is required!";
        }
        if (!values.email) {
            errors.email = "Email is required!";

        } else if (!regex.test(values.email)) {
            errors.email = "this is not a valid email format";

        } return errors
    }

    return (

        <Grid container spacing={0}>


            {Object.keys(FormErrors).length === 0 && isSubmit ? (<div className="ui message success">inscription effectuer</div>) : (<pre>
            </pre>)
            }
            <Grid item xs={12} sm={6}>
                <Card style={{ maxWidth: 550, margin: "0 auto", padding: "20px 5px" }}>
                    <CardContent>
                        <Box sx={{ width: '100%', maxWidth: 500, padding: "20px 5px" }}>
                            <img className="flex-column " src="./Sowy.png" alt="Logo" />
                            <Typography style={{ color: "#00adb5" }} variant="subtitle2" gutterBottom>
                                C'est plus qu'un réseau social,c'est plus qu'un crypto monnaie d'investissement
                                C'est notre univers solidaire pour un monde meilleur
                            </Typography>
                            <Typography style={{ color: "#1a1a1a" }} variant="subtitle2" gutterBottom>
                                Sur les autres plateformes je passe beaucoup de temps sans aucun gain
                                SoWaySo et TanitCoin valorise tous mes activités avec des primes de qualité
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Card>
                    <Box sx={{ width: '100%', maxWidth: 500, padding: "20px 5px", margin: "0 auto" }} >
                        <Typography style={{ color: "#00adb5" }} variant="subtitle2" gutterBottom>
                            Inscription 2 en 1
                        </Typography>
                        <Typography style={{ color: "#1a1a1a" }} variant="subtitle2" gutterBottom>
                            Votre profil personnel et votre compte TanitCoin
                        </Typography>
                        <Card style={{ maxWidth: 1050, maxHeight: 600, padding: "20px 5px", border: "3px solid #3f9994" }}>
                            <CardContent>

                                <form onSubmit={handleSubmit}>
                                    <Grid container spacing={1}>
                                        <Grid xs={12} item>
                                            <Typography variant="h6">Inscription</Typography>
                                            <Button variant="contained" id="outlined-size-small" style={{ color: "#00adb5" }} fullWidth size="small">code parrain</Button>
                                        </Grid>
                                        <Grid xs={6} sm={3} item>
                                            <TextField id="outlined-size-small" label="Nom" variant="outlined" placeholder="entrer votre nom" value={formValues.Nom} onChange={handleChange} size="small" fullWidth required></TextField>
                                        </Grid>
                                        <p>{FormErrors.Nom}</p>

                                        <Grid xs={6} sm={3} item>
                                            <TextField id="outlined-size-small" label="Prénon" variant="outlined" placeholder="entrer votre prénom" value={formValues.Prénon} onChange={handleChange} size="small" fullWidth required></TextField>
                                        </Grid>
                                        <p>{FormErrors.Prénon}</p>
                                        <Grid xs={6} xm={3} item>
                                            <TextField type="email" id="outlined-size-small" label="email" variant="outlined" placeholder="entrer votre email" value={formValues.email} onChange={handleChange} size="small" fullWidth required></TextField>
                                        </Grid>
                                        <p>{FormErrors.email}</p>
                                        <Grid item xs={6} xm={3}>
                                            <TextField type="number" id="outlined-size-small" placeholder="entrer votre Age" variant="outlined" size="small" fullWidth required></TextField>
                                        </Grid>
                                        <Grid item xs={6} xm={3}>
                                            <TextField type="number" id="outlined-size-small" label="Phone" variant="outlined" placeholder="entrer votre telephone" size="small" fullWidth required></TextField>
                                        </Grid>
                                        <Grid item xs={6} xm={3}>
                                            <TextField id="outlined-size-small" label="Langue" variant="outlined" placeholder="entrer langue" size="small" fullWidthrequired></TextField>
                                        </Grid>
                                        <Grid item xs={6} xm={3}>
                                            <TextField
                                                type="date" id="outlined-size-small" variant="outlined" fullWidth size="small"

                                                inputProps={{ min: "2019-01-24", max: "2020-05-31" }}
                                            /></Grid>
                                        <Grid xs={6} sm={3} item>
                                            <TextField id="outlined-size-small" label="Adresse" variant="outlined" placeholder="Adresse" size="small" fullWidth required></TextField>
                                            <Typography gutterBottom variant="h6" align="center">SoWaySo</Typography>
                                        </Grid>
                                        <Grid xs={12} item>
                                            <Button type="submit" id="outlined-size-small" variant="contained" style={{ color: "#00adb5" }} fullWidth size="small">S'Inscrire</Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </CardContent>

                        </Card>

                    </Box>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Card>
                    <Card style={{ maxWidth: 550, margin: "30px 0px", padding: "20px 5px", border: "3px solid #3f9994" }}>
                        <CardContent>
                            <form onSubmit={handleSubmit}>
                                <Grid xs={12} item>
                                    <Button type="submit" variant="contained" style={{ color: "#00adb5" }} size="small" fullWidth>Simulaire d'activité sociale</Button>
                                </Grid>
                                <Grid xs={12} item>
                                    <TextField label="Message" multiline rows={16} placeholder="Type your message" variant="outlined" fullWidth required />
                                </Grid>

                            </form>
                        </CardContent>
                    </Card>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6}><Card style={{ maxWidth: 550, margin: "30px 0px", padding: "20px 5px" }}>
                <CardContent>

                    <Typography variant="subtitle2" gutterBottom style={{ color: "#00adb5" }}>
                        Challenge Starter
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        J'invite mes amis à rejoindre mon réseau et je gagne jusqu'à 1200 TC/€
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom style={{ color: "#00adb5" }}>
                        Avec SoWaySo !! je consulte,je publie,je gagne
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        Je reçois mes primes sur tous les vues de mes photos et vidéos...
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom style={{ color: "#00adb5" }}>
                        Avec mes amis et mes abonnés on gagne solidairerement
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        Mon réseau social valorise nos activités avec des primes de réfèrence
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom style={{ color: "#00adb5" }}>
                        TaniCoin ma crypto monnaie de confiance
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        Sùr,efficace et avec une garantie de gain sur mes placements,il est révolutionnaire
                    </Typography>


                </CardContent>
            </Card>
            </Grid>


        </Grid>
    )


}
export default Inscrire;