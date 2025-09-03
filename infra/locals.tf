locals {
  project_name    = "seyva"
  name            = "SEyVA"
  domain_name     = "seyva.mx"
  domain_name_alt = "www.seyva.mx"
  mail_records = {
    mx = {
      name = ""
      type = "MX"
      ttl  = 14400
      records = [
        "5 mx1.hostinger.com",
        "10 mx2.hostinger.com"
      ]
    },
    spf = {
      name    = ""
      type    = "TXT"
      ttl     = 3600
      records = ["v=spf1 include:_spf.mail.hostinger.com ~all"]
    },
    dkim1 = {
      name    = "hostingermail-a._domainkey"
      type    = "CNAME"
      ttl     = 300
      records = ["hostingermail-a.dkim.mail.hostinger.com"]
    },
    dkim2 = {
      name    = "hostingermail-b._domainkey"
      type    = "CNAME"
      ttl     = 300
      records = ["hostingermail-b.dkim.mail.hostinger.com"]
    },
    dkim3 = {
      name    = "hostingermail-c._domainkey"
      type    = "CNAME"
      ttl     = 300
      records = ["hostingermail-c.dkim.mail.hostinger.com"]
    },
    auth = {
      name    = "_dmarc"
      type    = "TXT"
      ttl     = 3600
      records = ["v=DMARC1; p=none"]
    }
  }

  tags = {
    Environment = "Production"
    Project     = "seyva"
  }
}
