<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\TicketRepository")
 */
class Ticket
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $query_type;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $subject;

    /**
     * @ORM\Column(type="text")
     */
    private $message;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $mail_owner;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name_owner;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getQueryType(): ?string
    {
        return $this->query_type;
    }

    public function setQueryType(string $query_type): self
    {
        $this->query_type = $query_type;

        return $this;
    }

    public function getSubject(): ?string
    {
        return $this->subject;
    }

    public function setSubject(string $subject): self
    {
        $this->subject = $subject;

        return $this;
    }

    public function getMessage(): ?string
    {
        return $this->message;
    }

    public function setMessage(string $message): self
    {
        $this->message = $message;

        return $this;
    }

    public function getMailOwner(): ?string
    {
        return $this->mail_owner;
    }

    public function setMailOwner(string $mail_owner): self
    {
        $this->mail_owner = $mail_owner;

        return $this;
    }

    public function getNameOwner(): ?string
    {
        return $this->name_owner;
    }

    public function setNameOwner(string $name_owner): self
    {
        $this->name_owner = $name_owner;

        return $this;
    }
}
