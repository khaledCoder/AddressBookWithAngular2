package controllers

import (
	"github.com/revel/revel"
	"AddressBookWithAngular2/app/models"
	"github.com/gocql/gocql"
	"fmt"
)
type App struct {
	*revel.Controller
}
var selectedUserID gocql.UUID
func (c App) Index(id string) revel.Result {
	u2, _ :=gocql.ParseUUID(id)
 var Contacts =models.FindAllContacts(u2)
  c.Response.Out.Header().Add("Access-Control-Allow-Origin","*");
	fmt.Println("data after query returned!")
	fmt.Println(Contacts.Contacts)
	return c.RenderJson(Contacts.Contacts)
}

func (c App) Login() revel.Result{
	var userData models.Users
	var name , password string
  var emptyUUID gocql.UUID
//  var ok="true";
	c.Params.Bind(&name,"name")
	c.Params.Bind(&password,"pass")
	c.Response.Out.Header().Add("Access-Control-Allow-Origin","*");
	if name != "" && password != "" {
		// .. check credentials ..
		userData= models.FindUser(name,password)
		if userData.Pk!= emptyUUID{
      userID:= userData.Pk.String();
			fmt.Println(userID)
      return c.RenderJson(userID);
		}
	}
	return c.RenderJson(emptyUUID);
}

func (c App ) FindContactByContactID(id string)revel.Result{
	var contact models.Contact
	u2, _ :=gocql.ParseUUID(id)
 contact = models.FindContact(u2,selectedUserID)
  c.Response.Out.Header().Add("Access-Control-Allow-Origin","*");
	return c.RenderJson(contact)
}
func (c App) FindAllContactsByContactPhone() revel.Result{
	var id gocql.UUID
	var phone string
	 var contacts = models.FindAllContactsByContactPhone(id , phone)
	   c.Response.Out.Header().Add("Access-Control-Allow-Origin","*");
	return c.Render(contacts)
}
func (c App) FindAllContactsByContactName() revel.Result{
	var id gocql.UUID
	var phone string
	var contacts = models.FindAllContactsByContactName(id , phone)
	  c.Response.Out.Header().Add("Access-Control-Allow-Origin","*");
	return c.Render(contacts)
}
func (c App) SaveUserInfo()revel.Result{
	var contact  models.Contact
	var userID,Pk string
	c.Params.Bind(&userID,"userID")
	c.Params.Bind(&Pk,"Pk")
	c.Params.Bind(&contact.ContactName,"name")
	c.Params.Bind(&contact.ContactPhone,"mobile")
	contact.Pk=Pk;
	contact.UserID = userID;
	var emptyUUID ="00000000-0000-0000-0000-000000000000";
	if(contact.Pk!=emptyUUID){
		models.UpdateContactInfo(contact)
	}else{
		models.CreateContact(contact)
}
  c.Response.Out.Header().Add("Access-Control-Allow-Origin","*");
	return c.RenderJson(contact);
}
func (c App) DeleteContact() revel.Result{
		var contactID , userID string
	c.Params.Bind(&userID,"userID")
	c.Params.Bind(&contactID,"contactID")
	id, _ :=gocql.ParseUUID(contactID)
	userID1,_ := gocql.ParseUUID(userID);
	models.DeleteContact(id,userID1)
	  c.Response.Out.Header().Add("Access-Control-Allow-Origin","*");
	return c.RenderJson(id)
}
