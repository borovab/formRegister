//regex copy paste
export const firstnameRegex =
/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžæÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
export const emailRegex =
/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const passwordRegex =
/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?.]{8,20}$/;

export const regex = (data, refs) => {

  if (firstnameRegex.test(data.firstname.trim())) {
    refs.firstnameRef.current.style.border = "2px solid green";
  } else {
    refs.firstnameRef.current.style.border = "2px solid red";
  }

  if (firstnameRegex.test(data.lastname.trim())) {
    refs.lastnameRef.current.style.border = "2px solid green";
  } else {
    refs.lastnameRef.current.style.border = "2px solid red";
  }

  if (emailRegex.test(data.email)) {
    refs.emailRef.current.style.border = "2px solid green";
  } else {
    refs.emailRef.current.style.border = "2px solid red";
  }

  if (passwordRegex.test(data.password)) {
    refs.passwordRef.current.style.border = "2px solid green";
  } else {
    refs.passwordRef.current.style.border = "2px solid red";
  }
};

