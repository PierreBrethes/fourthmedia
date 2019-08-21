<?php
namespace App\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Controller\Annotations as Rest;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use App\Entity\Ticket;
use App\Form\ValidateTicketType;
/**
 * Ticket controller.
 * @Route("/api", name="api_")
 */
class TicketController extends FOSRestController
{
  /**
   * Lists all Tickets.
   * @Rest\Get("/tickets")
   *
   * @return Response
   */
  public function getTicketAction()
  {
    $repository = $this->getDoctrine()->getRepository(Ticket::class);
    $tickets = $repository->findall();
    return $this->handleView($this->view($tickets));
  }
}