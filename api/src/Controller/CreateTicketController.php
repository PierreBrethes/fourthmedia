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
 * @Route("/", name="api_")
 */
class CreateTicketController extends FOSRestController
{
  /**
   * Create Ticket.
   * @Rest\Post("/createTicket")
   *
   * @return Response
   */
  public function postTicketAction(Request $request)
  {
    $ticket = new Ticket();
    $form = $this->createForm(ValidateTicketType::class, $ticket);
    $data = json_decode($request->getContent(), true);
    $form->submit($data);
    if ($form->isSubmitted() && $form->isValid()) {
      $em = $this->getDoctrine()->getManager();
      $em->persist($ticket);
      $em->flush();
      return $this->handleView($this->view($ticket, Response::HTTP_CREATED));
    }
    return $this->handleView($this->view($ticket->getErrors()));
  }
}